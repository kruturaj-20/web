'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu, BarChart3, Lock, Share2, Layers } from 'lucide-react';
import styles from './PlatformEcosystem.module.css';

const orbitalNodes = [
  { label: 'Security', icon: <ShieldCheck size={20} />, angle: 0, distance: 300 },
  { label: 'Latency', icon: <Zap size={20} />, angle: 45, distance: 300 },
  { label: 'Global', icon: <Globe size={20} />, angle: 90, distance: 300 },
  { label: 'Intelligence', icon: <Cpu size={20} />, angle: 135, distance: 300 },
  { label: 'Analytics', icon: <BarChart3 size={20} />, angle: 180, distance: 300 },
  { label: 'Compliance', icon: <Lock size={20} />, angle: 225, distance: 300 },
  { label: 'Networking', icon: <Share2 size={20} />, angle: 270, distance: 300 },
  { label: 'Architecture', icon: <Layers size={20} />, angle: 315, distance: 300 },
];

const PlatformEcosystem = () => {
  return (
    <section className={styles.ecosystemSection} id="ecosystem">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Complete Ecosystem</span>
          <h2 className={styles.title}>All your technical needs,<br />in one unified hub.</h2>
          <p className={styles.subtitle}>
            Hexstack integrates every layer of the modern digital stack into a single, high-performance platform.
          </p>
        </div>

        <div className={styles.visualWrapper}>
          {/* Central Hub */}
          <div className={styles.hubCenter}>
            <Zap size={32} />
          </div>

          {/* Orbiting Nodes */}
          {orbitalNodes.map((node, i) => {
            const x = Math.cos((node.angle * Math.PI) / 180) * node.distance;
            const y = Math.sin((node.angle * Math.PI) / 180) * node.distance;

            return (
              <motion.div
                key={node.label}
                className={styles.orbital}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{ 
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                }}
              >
                <div className={styles.node}>
                  {node.icon}
                </div>
                <span className={styles.nodeLabel}>{node.label}</span>
              </motion.div>
            );
          })}

          {/* Connecting Lines */}
          <svg className={styles.linesContainer} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
            {orbitalNodes.map((node, i) => {
              const x2 = 500 + Math.cos((node.angle * Math.PI) / 180) * node.distance;
              const y2 = 500 + Math.sin((node.angle * Math.PI) / 180) * node.distance;
              
              return (
                <motion.line
                  key={`line-${i}`}
                  x1="500"
                  y1="500"
                  x2={x2}
                  y2={y2}
                  stroke="var(--primary)"
                  strokeWidth="1.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PlatformEcosystem;
