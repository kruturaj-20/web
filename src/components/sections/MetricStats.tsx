'use client';

import React from 'react';
import { Activity, Zap, Globe, ShieldCheck } from 'lucide-react';
import styles from './MetricStats.module.css';

const MetricStats = () => {
  return (
    <section className={styles.metricStats} id="metrics">
      <div className={styles.bgGlow} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Engineered for Excellence</span>
          <h2 className={styles.title}>Scale without compromises</h2>
          <p className={styles.subtitle}>
            Hexstack is built on a foundation of speed, security, and global availability.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Uptime Card */}
          <div className={`${styles.card} ${styles.cardUptime}`}>
            <div className={styles.iconWrapper}>
              <Activity size={24} />
            </div>
            <div className={styles.content}>
              <h3>Reliability</h3>
              <div className={styles.value}>
                <span className={styles.pulseDot} />
                99.9% Uptime
              </div>
              <p className={styles.desc}>Enterprise-grade infrastructure with automated failover and 24/7 monitoring.</p>
            </div>
          </div>

          {/* Speed Card */}
          <div className={`${styles.card} ${styles.cardSpeed}`}>
            <div className={styles.iconWrapper}>
              <Zap size={24} />
            </div>
            <div className={styles.content}>
              <h3>Performance</h3>
              <div className={styles.value}>10x Faster</div>
              <p className={styles.desc}>Optimized engine designed to outperform legacy systems by an order of magnitude.</p>
            </div>
          </div>

          {/* Regions Card */}
          <div className={`${styles.card} ${styles.cardRegions}`}>
            <div className={styles.iconWrapper}>
              <Globe size={24} />
            </div>
            <div className={styles.content}>
              <h3>Availability</h3>
              <div className={styles.value}>40+ Regions</div>
              <p className={styles.desc}>Global edge network ensuring low latency and high availability across 6 continents.</p>
            </div>
          </div>

          {/* Security Card */}
          <div className={`${styles.card} ${styles.cardSecurity}`}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={24} />
            </div>
            <div className={styles.content}>
              <h3>Security</h3>
              <div className={styles.value}>Bank-Grade</div>
              <p className={styles.desc}>End-to-end encryption, SOC2 compliance, and advanced threat protection built-in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricStats;
