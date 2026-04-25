'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Globe, Cpu, Share2, Layers } from 'lucide-react';
import styles from './TechnicalBento.module.css';

const TechnicalBento = () => {
  return (
    <section className={styles.bentoSection} id="superpowers">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Engineering Superpowers</span>
          <h2 className={styles.title}>The technical edge of<br />next-gen engineering.</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Large - Edge Runtime */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${styles.card} ${styles.large}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><Zap size={20} /></div>
              <h3 className={styles.cardTitle}>Optimized Edge Runtime</h3>
            </div>
            <p className={styles.cardDesc}>
              Execute compute as close to your users as possible. Sub-50ms cold starts across our entire global fleet.
            </p>
            <div className={styles.visualArea}>
              <div className={styles.pulseNode} />
            </div>
          </motion.div>

          {/* Card 2: Medium - Zero-Trust */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${styles.card} ${styles.medium}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
              <h3 className={styles.cardTitle}>Zero-Trust Core</h3>
            </div>
            <p className={styles.cardDesc}>
              Military-grade encryption for every request. SOC2 and GDPR compliant by design.
            </p>
            <div className={styles.visualArea}>
              <div style={{ width: '100%', padding: '0 1rem' }}>
                <div className={styles.aiLine}><div className={styles.aiLineGlow} /></div>
                <div className={styles.aiLine} style={{ width: '80%' }}><div className={styles.aiLineGlow} style={{ animationDelay: '1s' }} /></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Small - AI Routing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${styles.card} ${styles.small}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><Cpu size={20} /></div>
              <h3 className={styles.cardTitle}>AI Routing</h3>
            </div>
            <p className={styles.cardDesc}>Dynamic traffic steering based on real-time network health.</p>
          </motion.div>

          {/* Card 4: Wide - Global Connect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${styles.card} ${styles.wide}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}><Globe size={20} /></div>
              <h3 className={styles.cardTitle}>Universal Connectivity</h3>
            </div>
            <p className={styles.cardDesc}>
              Seamlessly connect to any cloud provider or database with our managed private network.
            </p>
            <div className={styles.visualArea}>
              <div style={{ display: 'flex', gap: '2rem', opacity: 0.3 }}>
                <Share2 size={40} />
                <Layers size={40} />
                <Globe size={40} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBento;
