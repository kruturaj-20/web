'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import Section from '../ui/Section';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    title: "Uncompromising Quality",
    icon: <ShieldCheck size={40} />,
    description: "We don't settle for 'good enough'. Every pixel, line of code, and strategy is refined until it meets our elite standards."
  },
  {
    title: "Edge Technologies",
    icon: <Zap size={40} />,
    description: "We leverage the latest in AI, 3D web, and cloud infrastructure to give your brand a definitive competitive advantage."
  },
  {
    title: "Strategic Partnership",
    icon: <Users size={40} />,
    description: "We act as an extension of your team, deeply aligning our creative execution with your core business objectives."
  }
];

const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className={styles.whyChooseUs}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.span className="gradient-text" style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Platform Advantages</motion.span>
            <h2 className={styles.title}>Why teams build on <span className="gradient-text">Vanguard</span>.</h2>
            <p className={styles.description}>
              In a sea of fragmented tools and generic agencies, we provide a unified platform. We don't just build software; we engineer scalable businesses.
            </p>
          </div>
          <div className={styles.reasons}>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={styles.reasonCard}
              >
                <div className={styles.icon}>{reason.icon}</div>
                <div className={styles.reasonInfo}>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDesc}>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
