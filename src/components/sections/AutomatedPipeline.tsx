'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link, Cpu, ShieldCheck, Globe } from 'lucide-react';
import styles from './AutomatedPipeline.module.css';

const steps = [
  {
    title: 'Connect',
    desc: 'Integrate your existing data sources and toolchains with a single click.',
    icon: <Link size={32} />
  },
  {
    title: 'Automate',
    desc: 'Our AI engine streamlines your workflows and eliminates manual bottlenecks.',
    icon: <Cpu size={32} />
  },
  {
    title: 'Secure',
    desc: 'Enterprise-grade protocols are applied automatically at every layer.',
    icon: <ShieldCheck size={32} />
  },
  {
    title: 'Scale',
    desc: 'Instantly deploy to our global edge network for limitless growth.',
    icon: <Globe size={32} />
  }
];

const AutomatedPipeline = () => {
  return (
    <section className={styles.pipelineSection} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Hexstack Engine</span>
          <h2 className={styles.title}>From idea to global scale.<br />Fully automated.</h2>
        </div>

        <div className={styles.pipeline}>
          <div className={styles.connectorLine}>
            <div className={styles.lineGlow} />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={styles.step}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.stepIcon}>{step.icon}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomatedPipeline;
