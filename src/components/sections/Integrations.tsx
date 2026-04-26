'use client';

import React from 'react';
import { 
  Github, 
  Slack, 
  Figma, 
  Database, 
  CreditCard, 
  FileText, 
  Layers, 
  MessageSquare,
  Box,
  Code2
} from 'lucide-react';
import styles from './Integrations.module.css';

const integrationList = [
  { name: 'GitHub', Icon: Github },
  { name: 'Slack', Icon: Slack },
  { name: 'Figma', Icon: Figma },
  { name: 'AWS', Icon: Database },
  { name: 'Stripe', Icon: CreditCard },
  { name: 'Notion', Icon: FileText },
  { name: 'Vercel', Icon: Layers },
  { name: 'Discord', Icon: MessageSquare },
  { name: 'Linear', Icon: Box },
  { name: 'VS Code', Icon: Code2 },
];

const Integrations = () => {
  return (
    <section className={styles.integrations} id="integrations">
      <div className={styles.glowTop} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Ecosystem</span>
          <h2 className={styles.title}>Your workflow, unified.</h2>
          <p className={styles.subtitle}>
            Hexstack integrates seamlessly with the industry-leading tools you already use every day.
          </p>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContent}>
            {/* Render twice for seamless scrolling */}
            {[...integrationList, ...integrationList].map((item, index) => (
              <div key={`${item.name}-${index}`} className={styles.logoItem}>
                <item.Icon className={styles.logoIcon} size={24} />
                <span className={styles.logoName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
