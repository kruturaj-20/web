'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '../ui/Section';
import styles from './Results.module.css';

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Results = () => {
  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Revenue Generated', value: 12, suffix: 'M+' },
    { label: 'Client Satisfaction', value: 99, suffix: '%' },
    { label: 'Industry Awards', value: 24, suffix: '' },
  ];

  return (
    <Section id="results" className={styles.results}>
      <div className="container">
        <div className={styles.statsStrip}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: [0.19, 1, 0.22, 1] as any }}
              className={styles.statItem}
            >
              <h2 className={styles.value}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </h2>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Results;
