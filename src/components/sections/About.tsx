'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Shield } from 'lucide-react';
import Section from '../ui/Section';
import SpotlightCard from '../ui/SpotlightCard';
import styles from './About.module.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const values = [
    {
      icon: <Target size={20} />,
      title: 'Precision Execution',
      description: 'We believe in meticulous craftsmanship. Every pixel and line of code is intentional.'
    },
    {
      icon: <Users size={20} />,
      title: 'Human-Centric Strategy',
      description: 'We build digital products for people, ensuring empathy is at the core of our solutions.'
    },
    {
      icon: <Shield size={20} />,
      title: 'Built to Last',
      description: 'Our architectures are engineered for scalability and longevity in an evolving market.'
    }
  ];

  return (
    <Section id="about" className={styles.about}>
      <div ref={containerRef} className="container">
        <div className={styles.grid}>
          <motion.div style={{ x: bgX }} className={styles.bgText}>
            VANGUARD
          </motion.div>
          
          <div className={styles.content}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="gradient-text"
              style={{ fontWeight: 700, letterSpacing: '0.1em' }}
            >
              OUR STORY
            </motion.span>
            <h2 className={styles.title}>We are <span className="gradient-text">Vanguard</span>.</h2>
            <p className="lead" style={{ marginBottom: 'var(--sp-8)' }}>
              Founded at the intersection of Art and Technology, Vanguard Digital is a boutique creative powerhouse. We don't just build websites; we engineer digital legacies for brands that refuse to be ignored.
            </p>

            <div className={styles.values}>
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.valueItem}
                >
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <div>
                    <h4 className={styles.valueTitle}>{v.title}</h4>
                    <p className={styles.valueDesc}>{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <SpotlightCard className={styles.imageCard}>
              <div className={styles.imageInner}>
                <div className={styles.mainImage}>
                  <div className={styles.imageGlow}></div>
                </div>
              </div>
            </SpotlightCard>
            <motion.div style={{ y: badgeY }} className={styles.experienceBadge}>
              <h3 className={styles.expNumber}>10+</h3>
              <p className={styles.expText}>Years of Creative Mastery</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
