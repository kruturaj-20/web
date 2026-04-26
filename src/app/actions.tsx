'use server';

import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { LeadNotificationTemplate } from '@/components/emails/LeadNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

// Prisma Singleton for Next.js to prevent multiple connections in dev
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  try {
    // 1. Honeypot check
    const honeypot = formData.get('website');
    if (honeypot) {
      // It's a bot! Silently fail or return success to fool the bot
      console.log("Bot detected via honeypot.");
      return { success: true, message: "Lead captured successfully!" };
    }

    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      mobile: formData.get('mobile') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    // 2. Rate Limiting Check (Simple DB-based)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const existingSubmission = await prisma.lead.findFirst({
      where: {
        email: rawData.email,
        createdAt: { gte: fiveMinutesAgo },
      },
    });

    if (existingSubmission) {
      return { success: false, error: "Please wait a few minutes before submitting again." };
    }

    // 3. Validate data
    const validatedData = ContactSchema.parse(rawData);

    // 4. Save to MongoDB
    const lead = await prisma.lead.create({
      data: validatedData,
    });

    // 5. Send Email Notification
    try {
      await resend.emails.send({
        from: 'Hexstack <onboarding@resend.dev>', // You can change this to your domain later
        to: ['Hexstacksolutions@gmail.com'],
        subject: `New Lead: ${validatedData.name} - ${validatedData.service}`,
        react: <LeadNotificationTemplate {...validatedData} />,
      });
    } catch (emailError) {
      // We don't want to fail the whole submission if email fails
      console.error("Email notification error:", emailError);
    }

    return { success: true, message: "Lead captured successfully!", leadId: lead.id };
  } catch (error) {
    console.error("Submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
