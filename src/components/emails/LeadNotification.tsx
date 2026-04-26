import * as React from 'react';

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
  <div style={{
    fontFamily: 'sans-serif',
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px'
  }}>
    <h1 style={{ color: '#6366f1', fontSize: '24px', marginBottom: '20px' }}>New Lead Captured! 🚀</h1>
    <p>You have a new project inquiry from your website.</p>
    
    <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Service:</strong> {service}</p>
      <p style={{ marginTop: '15px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
        <strong>Message:</strong><br />
        {message}
      </p>
    </div>
    
    <p style={{ fontSize: '12px', color: '#666', marginTop: '30px', textAlign: 'center' }}>
      Sent from your Hexstack Digital website backend.
    </p>
  </div>
);
