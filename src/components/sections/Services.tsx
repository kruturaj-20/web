'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Rocket, Layers, Zap, ArrowRight, Activity } from 'lucide-react';
import Section from '../ui/Section';
import styles from './Services.module.css';

const features = [
  {
    title: "Web Platform Development",
    icon: <Code size={28} />,
    description: "High-performance, SEO-optimized web applications that convert. We specialize in Next.js and interactive 3D web experiences.",
    span: 2, // Large card
    color: "var(--primary)"
  },
  {
    title: "Mobile App Scaling",
    icon: <Smartphone size={28} />,
    description: "Scalable iOS and Android applications built with modern frameworks for seamless offline and online experiences.",
    span: 1, // Small card
    color: "var(--secondary)"
  },
  {
    title: "Growth & Analytics",
    icon: <Activity size={28} />,
    description: "Data-driven campaigns and deep metric analysis to dominate the digital landscape.",
    span: 1, // Small card
    color: "var(--accent)"
  },
  {
    title: "Headless Architecture",
    icon: <Layers size={28} />,
    description: "Future-proof your content with composable architecture and headless CMS integrations.",
    span: 1, // Small card
    color: "var(--success)"
  },
  {
    title: "Performance Optimization",
    icon: <Zap size={28} />,
    description: "Lightning-fast load times with edge computing and advanced asset optimization.",
    span: 1, // Small card
    color: "#f59e0b"
  }
];

const Services = () => {
  return (
    <Section id="features" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="gradient-text"
            style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            The Vanguard Platform
          </motion.span>
          <h2 className={styles.title}>Everything you need to <span className="gradient-text">scale</span>.</h2>
          <p className={styles.subtitle}>
            A complete suite of engineering and growth tools designed to turn your visionary ideas into world-class digital products.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${styles.bentoCard} ${feature.span === 2 ? styles.cardSpan2 : ''}`}
            >
              <div 
                className={styles.iconGlow} 
                style={{ background: `radial-gradient(circle at center, ${feature.color}33 0%, transparent 70%)` }}
              />
              <div className={styles.iconWrapper} style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              
              {feature.span === 2 && (
                <div className={styles.mockupContainer}>
                   <div className={styles.mockupWindow}>
                      <div className={styles.mockupHeader}>
                        <span className={styles.dot} style={{background: '#ff5f57'}} />
                        <span className={styles.dot} style={{background: '#febc2e'}} />
                        <span className={styles.dot} style={{background: '#28c840'}} />
                      </div>
                      <div className={styles.mockupBody}>
                        <div className={styles.codeLine} style={{width: '80%'}} />
                        <div className={styles.codeLine} style={{width: '60%'}} />
                        <div className={styles.codeLine} style={{width: '90%'}} />
                        <div className={styles.codeLine} style={{width: '40%'}} />
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
