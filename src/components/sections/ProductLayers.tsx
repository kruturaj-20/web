'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Database, ChevronDown } from 'lucide-react';
import styles from './ProductLayers.module.css';

const layers = [
  {
    id: 'exp',
    title: 'The Experience Layer',
    desc: 'High-performance UI/UX systems built with React and edge-optimized frameworks for sub-200ms interactions.',
    icon: <Layout size={32} />,
    className: styles.layerExperience
  },
  {
    id: 'int',
    title: 'The Intelligence Layer',
    desc: 'AI-driven engine that handles automated deployment, real-time security scanning, and traffic optimization.',
    icon: <Cpu size={32} />,
    className: styles.layerIntelligence
  },
  {
    id: 'inf',
    title: 'The Infrastructure Layer',
    desc: 'A global multi-cloud edge network with bank-grade encryption and 99.99% guaranteed uptime.',
    icon: <Database size={32} />,
    className: styles.layerInfrastructure
  }
];

const ProductLayers = () => {
  return (
    <section className={styles.layersSection} id="architecture">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Technical Architecture</span>
          <h2 className={styles.title}>The full-stack of<br />enterprise excellence.</h2>
          <p className={styles.subtitle}>
            Hexstack is built as a three-dimensional ecosystem where every layer is engineered for maximum performance.
          </p>
        </div>

        <div className={styles.stack}>
          {layers.map((layer, index) => (
            <React.Fragment key={layer.id}>
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 25 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 25 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`${styles.layer} ${layer.className}`}
              >
                <div className={styles.layerContent}>
                  <div className={styles.iconBox}>
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className={styles.layerTitle}>{layer.title}</h3>
                    <p className={styles.layerDesc}>{layer.desc}</p>
                  </div>
                </div>
              </motion.div>
              {index < layers.length - 1 && (
                <div className={styles.connector} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLayers;
