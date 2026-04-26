import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from '@react-email/components';

interface LeadNotificationTemplateProps {
  name: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
}

export const LeadNotificationTemplate: React.FC<Readonly<LeadNotificationTemplateProps>> = ({
  name,
  email,
  mobile,
  service,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New lead from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Lead Captured! 🚀</Heading>
        <Text style={text}>You have a new project inquiry from your website.</Text>
        
        <Section style={card}>
          <Text style={item}><strong>Name:</strong> {name}</Text>
          <Text style={item}><strong>Email:</strong> {email}</Text>
          <Text style={item}><strong>Mobile:</strong> {mobile}</Text>
          <Text style={item}><strong>Service:</strong> {service}</Text>
          <Hr style={hr} />
          <Text style={item}>
            <strong>Message:</strong><br />
            {message}
          </Text>
        </Section>
        
        <Text style={footer}>
          Sent from your Hexstack Digital website backend.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#6366f1',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const text = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#525f7f',
  textAlign: 'center' as const,
};

const card = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px',
};

const item = {
  fontSize: '16px',
  color: '#525f7f',
  margin: '10px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '30px',
};
