'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Rocket, Timer, BarChart, Globe } from 'lucide-react';
import styles from './VelocityGrid.module.css';

const milestones = [
  {
    time: 'Day 1: Integration',
    title: 'Zero to Production',
    desc: 'Connect your stack and deploy your first global environment in minutes. No complex configuration required.',
    icon: <Zap size={48} />
  },
  {
    time: 'Month 1: Velocity',
    title: 'Autonomic Growth',
    desc: 'Our AI engine identifies and resolves bottlenecks automatically, increasing your engineering velocity by up to 300%.',
    icon: <TrendingUp size={48} />
  },
  {
    time: 'Year 1: Scale',
    title: 'Global Dominance',
    desc: 'Support millions of users with a resilient, self-healing infrastructure that scales effortlessly across 40+ regions.',
    icon: <Globe size={48} />
  }
];

const VelocityGrid = () => {
  return (
    <section className={styles.velocitySection} id="roadmap">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Success Roadmap</span>
          <h2 className={styles.title}>Velocity at every stage.</h2>
          <p className={styles.subtitle}>
            Experience the compounding value of the Vanguard platform as your product evolves from MVP to enterprise scale.
          </p>
        </div>

        <div className={styles.grid}>
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={styles.card}
            >
              <div className={styles.accentGlow} />
              
              <div>
                <div className={styles.timeLabel}>{item.time}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>

              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VelocityGrid;
