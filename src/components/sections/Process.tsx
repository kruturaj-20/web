'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';
import styles from './Process.module.css';

const Process = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We dive deep into your brand, audience, and goals to build a solid strategic foundation.',
      icon: <Search size={24} />,
    },
    {
      title: 'Strategy',
      description: 'Our team crafts a bespoke roadmap designed for high-impact results and scalability.',
      icon: <Lightbulb size={24} />,
    },
    {
      title: 'Execution',
      description: 'We bring the vision to life with elite design and high-performance engineering.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Growth',
      description: 'Continuous optimization and scaling to ensure long-term dominance in your market.',
      icon: <TrendingUp size={24} />,
    }
  ];

  return (
    <Section id="process" className={styles.process}>
      <div className="container">
        <div className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-text"
            style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            How it works
          </motion.span>
          <h2 className={styles.title}>From idea to <span className="gradient-text">production</span> in weeks.</h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className={`${styles.step} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepBadge}>{index + 1}</div>
                  <div className={styles.iconBox}>{step.icon}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
