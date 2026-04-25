'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Zap } from 'lucide-react';
import styles from './GlobalMap.module.css';

const nodes = [
  { name: 'San Francisco', x: '12%', y: '35%' },
  { name: 'New York', x: '25%', y: '38%' },
  { name: 'London', x: '47%', y: '25%' },
  { name: 'Frankfurt', x: '51%', y: '28%' },
  { name: 'Mumbai', x: '70%', y: '52%' },
  { name: 'Singapore', x: '82%', y: '65%' },
  { name: 'Tokyo', x: '88%', y: '35%' },
  { name: 'Sydney', x: '92%', y: '85%' },
  { name: 'Sao Paulo', x: '32%', y: '75%' },
  { name: 'Cape Town', x: '52%', y: '85%' },
];

const GlobalMap = () => {
  return (
    <section className={styles.globalMap} id="infrastructure">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Built for Global Scale</span>
          <h2 className={styles.title}>Infrastructure that<br />never sleeps.</h2>
          <p className={styles.subtitle}>
            Deploy your applications across our hyper-connected global edge network for sub-50ms latency anywhere on Earth.
          </p>
        </div>

        <div className={styles.mapContainer}>
          {/* Simple World Map SVG */}
          <svg viewBox="0 0 1000 500" className={styles.mapSvg}>
            <path d="M150,150 Q200,100 300,150 T500,200 T700,150 T900,200" fill="none" stroke="currentColor" strokeOpacity="0.1" />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M120,175 Q450,50 880,175" 
              fill="none" 
              stroke="var(--primary)" 
              strokeWidth="1" 
              strokeDasharray="5,5"
              strokeOpacity="0.3"
            />
            {/* World landmass silhouette (simplified) */}
            <path d="M50,100 L150,80 L200,120 L300,100 L400,150 L500,130 L600,180 L700,150 L800,120 L900,150 L950,250 L900,400 L800,350 L700,450 L600,400 L500,480 L400,400 L300,450 L200,400 L100,450 L50,350 Z" 
                  fill="rgba(255,255,255,0.03)" />
          </svg>

          {/* Pulsing Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.name}
              className={styles.node}
              style={{ left: node.x, top: node.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.nodeLabel}>{node.name}</div>
            </motion.div>
          ))}

          {/* Stats Overlay */}
          <div className={styles.statsOverlay}>
            <div className={styles.stat}>
              <div className={styles.statValue}>40+</div>
              <div className={styles.statLabel}>Global Regions</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>99.99%</div>
              <div className={styles.statLabel}>Network Uptime</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>&lt; 50ms</div>
              <div className={styles.statLabel}>Avg. Latency</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>250+</div>
              <div className={styles.statLabel}>Edge Nodes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
