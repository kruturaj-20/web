'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import MagneticButton from '../ui/MagneticButton';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <Section id="cta" className={styles.cta}>
      <div className={`container ${styles.ctaContainer}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.glassCard}
        >
          <div className={styles.glowBg}></div>
          <h2 className={styles.title}>
            Ready to build the <span className="gradient-text">Unimaginable</span>?
          </h2>
          <p className={styles.subtitle}>
            Join the elite circle of brands that refuse to settle for the ordinary. Let's engineer your digital legacy together.
          </p>
          <div className={styles.btnWrapper}>
            <MagneticButton>
              <button className="button button-primary">
                Start a Conversation <ArrowRight size={18} />
              </button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default CTA;
