'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import Section from '../ui/Section';
import SpotlightCard from '../ui/SpotlightCard';
import styles from './Testimonials.module.css';

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className={styles.stars} aria-label={`Rated ${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={12} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true" />
    ))}
  </div>
);

interface TestimonialData {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Luxe Real Estate',
    content: 'Hexstack Digital transformed our online presence. Their attention to detail and technical mastery is unmatched in the industry.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Quantum',
    content: 'The team delivered our mobile app ahead of schedule. The user response has been phenomenal.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Growth',
    company: 'Nebula E-commerce',
    content: 'Our conversion rates spiked by 40% after the redesign. Their strategic approach to digital growth is a game changer.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'Streamline AI',
    content: 'Technical excellence is hard to find. Hexstack provides exactly that. Their cloud architecture optimizations saved us 30% on infrastructure costs.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
  },
  {
    name: 'Sophie Müller',
    role: 'Product Lead',
    company: 'Velox',
    content: 'Working with Hexstack felt like an extension of our own team. Professional, responsive, and innovative.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'VP Engineering',
    company: 'CloudScale',
    content: 'The depth of their full-stack expertise is impressive. They handled our complex migration with zero downtime.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    rating: 5,
  },
  {
    name: 'Aiden Smith',
    role: 'Head of Product',
    company: 'Pulse',
    content: 'The UI/UX design is world-class. It has significantly improved our user retention rates.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden',
    rating: 5,
  },
  {
    name: 'Isabella Garcia',
    role: 'Marketing Manager',
    company: 'Flow State',
    content: 'Hexstack helped us scale our platform seamlessly. Their support team is always available and proactive.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella',
    rating: 5,
  },
  {
    name: 'Noah Williams',
    role: 'Co-Founder',
    company: 'Vertex',
    content: 'Outstanding results. They truly understand what a startup needs to succeed in a competitive market.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Noah',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialData }) => (
  <SpotlightCard className={styles.card}>
    <div className={styles.cardInner}>
      <div className={styles.cardTop}>
        <StarRating rating={testimonial.rating} />
        <div className={styles.quoteIcon}>
          <Quote size={16} fill="currentColor" />
        </div>
      </div>
      
      <p className={styles.content}>
        &ldquo;{testimonial.content}&rdquo;
      </p>
      
      <div className={styles.footer}>
        <div className={styles.author}>
          <div className={styles.avatarWrapper}>
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className={styles.avatar}
            />
            <div className={styles.verifiedBadge}>
              <CheckCircle2 size={10} fill="var(--primary)" color="white" />
            </div>
          </div>
          <div className={styles.authorInfo}>
            <h4 className={styles.name}>{testimonial.name}</h4>
            <p className={styles.role}>{testimonial.role} at <span className={styles.companyName}>{testimonial.company}</span></p>
          </div>
        </div>
      </div>
    </div>
  </SpotlightCard>
);

const Column = ({ testimonials, duration = 40, reverse = false }: { testimonials: TestimonialData[], duration?: number, reverse?: boolean }) => {
  return (
    <div className={styles.columnWrapper}>
      <motion.div
        animate={{
          y: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className={styles.column}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  // Split testimonials into 3 columns
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <Section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.badge}
          >
            <CheckCircle2 size={14} className={styles.badgeIcon} />
            <span>WALL OF LOVE</span>
          </motion.div>
          <h2 className={styles.title}>
            Trusted by the <span className="gradient-text">Best in Business</span>.
          </h2>
          <p className={styles.subtitle}>
            Join 500+ companies that have scaled their digital products with Hexstack's technical mastery.
          </p>
        </div>

        <div className={styles.wallWrapper}>
          <div className={styles.maskTop}></div>
          <div className={styles.wallGrid}>
            <Column testimonials={col1} duration={35} />
            <Column testimonials={col2} duration={45} reverse />
            <Column testimonials={col3} duration={40} />
          </div>
          <div className={styles.maskBottom}></div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

