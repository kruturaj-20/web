'use client';

import React from 'react';
import { XCircle, CheckCircle2, AlertCircle, Clock, Link2Off, Zap, Workflow, ShieldCheck, TrendingUp } from 'lucide-react';
import styles from './ProblemSolution.module.css';

const ProblemSolution = () => {
  return (
    <section className={styles.problemSolution} id="comparison">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Paradigm Shift</span>
          <h2 className={styles.title}>Stop managing friction.<br />Start building value.</h2>
          <p className={styles.subtitle}>
            We replaced fragmented legacy processes with a unified engine built for the modern engineering era.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Legacy Approach */}
          <div className={`${styles.card} ${styles.legacyCard}`}>
            <span className={styles.legacyLabel}>The Legacy Approach</span>
            <h3 className={styles.cardTitle}>Fragmented & Fragile</h3>
            
            <div className={styles.list}>
              <div className={styles.item}>
                <Link2Off className={styles.legacyIcon} size={20} />
                <span>Disconnected toolchains and data silos</span>
              </div>
              <div className={styles.item}>
                <Clock className={styles.legacyIcon} size={20} />
                <span>Weeks of manual infrastructure setup</span>
              </div>
              <div className={styles.item}>
                <AlertCircle className={styles.legacyIcon} size={20} />
                <span>High operational overhead and hidden costs</span>
              </div>
              <div className={styles.item}>
                <XCircle className={styles.legacyIcon} size={20} />
                <span>Scaling limited by headcount and complexity</span>
              </div>
            </div>
          </div>

          <div className={styles.connector}>VS</div>

          {/* Hexstack Way */}
          <div className={`${styles.card} ${styles.hexstackCard}`}>
            <span className={styles.hexstackLabel}>The Hexstack Way</span>
            <h3 className={styles.cardTitle}>Unified & Scalable</h3>
            
            <div className={styles.list}>
              <div className={`${styles.item} ${styles.hexstackItem}`}>
                <Workflow className={styles.hexstackIcon} size={20} />
                <span>End-to-end integrated platform experience</span>
              </div>
              <div className={`${styles.item} ${styles.hexstackItem}`}>
                <Zap className={styles.hexstackIcon} size={20} />
                <span>Instant deployment with zero-config setup</span>
              </div>
              <div className={`${styles.item} ${styles.hexstackItem}`}>
                <ShieldCheck className={styles.hexstackIcon} size={20} />
                <span>Automated security and compliance by default</span>
              </div>
              <div className={`${styles.item} ${styles.hexstackItem}`}>
                <TrendingUp className={styles.hexstackIcon} size={20} />
                <span>Infinite scalability with autonomic systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
