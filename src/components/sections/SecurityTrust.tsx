'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileLock2, ShieldAlert, CheckCircle2 } from 'lucide-react';
import styles from './SecurityTrust.module.css';

const badges = [
  { name: 'SOC2 Type II', icon: <ShieldCheck size={28} /> },
  { name: 'GDPR Compliant', icon: <Lock size={28} /> },
  { name: 'HIPAA Ready', icon: <FileLock2 size={28} /> },
  { name: 'ISO 27001', icon: <ShieldAlert size={28} /> },
];

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    desc: "Your data is encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3 protocols.",
    icon: <Lock size={24} />
  },
  {
    title: "Zero-Trust Architecture",
    desc: "Never trust, always verify. Every request is authenticated, authorized, and continuously validated.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Real-time Guard",
    desc: "Active threat detection and automated incident response systems powered by advanced AI patterns.",
    icon: <ShieldAlert size={24} />
  }
];

const SecurityTrust = () => {
  return (
    <section className={styles.securityTrust} id="security">
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Bank-Grade Security</span>
          <h2 className={styles.title}>Enterprise trust,<br />built-in by default.</h2>
          <p className={styles.subtitle}>
            Vanguard is designed with a security-first mindset, ensuring your data and infrastructure are protected at every layer.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className={styles.badgesRow}>
          {badges.map((badge) => (
            <div key={badge.name} className={styles.badgeItem}>
              <div className={styles.badgeIcon}>
                {badge.icon}
              </div>
              <span className={styles.badgeName}>{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Technical Features Grid */}
        <div className={styles.grid}>
          {securityFeatures.map((feature, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success, #10b981)', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} />
                Fully Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
