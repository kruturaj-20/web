'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const Section = ({ children, id, className = '', delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as any }}
      className={`section ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
