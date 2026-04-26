'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Lock, Zap } from 'lucide-react';
import styles from './CodeToCloud.module.css';

const CodeToCloud = () => {
  return (
    <section className={styles.codeToCloud} id="code-to-cloud">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Developer Experience</span>
          <h2 className={styles.title}>From `git push` to<br />global production.</h2>
          <p className={styles.subtitle}>
            The fastest way to deploy your code to a secure, world-class infrastructure without managing servers.
          </p>
        </div>

        <div className={styles.splitView}>
          {/* Editor Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={styles.editor}
          >
            <div className={styles.editorHeader}>
              <div className={styles.dot} style={{ background: '#ff5f57' }} />
              <div className={styles.dot} style={{ background: '#febc2e' }} />
              <div className={styles.dot} style={{ background: '#28c840' }} />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginLeft: '1rem' }}>hexstack.config.js</span>
            </div>
            <div className={styles.editorContent}>
              <div className={styles.line}><span className={styles.ln}>1</span><span><span className={styles.keyword}>export default</span> <span className={styles.func}>defineConfig</span>({'{'}</span></div>
              <div className={styles.line}><span className={styles.ln}>2</span><span style={{ paddingLeft: '1.5rem' }}>runtime: <span className={styles.string}>'edge'</span>,</span></div>
              <div className={styles.line}><span className={styles.ln}>3</span><span style={{ paddingLeft: '1.5rem' }}>regions: [<span className={styles.string}>'us-east'</span>, <span className={styles.string}>'eu-west'</span>, <span className={styles.string}>'ap-south'</span>],</span></div>
              <div className={styles.line}><span className={styles.ln}>4</span><span style={{ paddingLeft: '1.5rem' }}>security: {'{'}</span></div>
              <div className={styles.line}><span className={styles.ln}>5</span><span style={{ paddingLeft: '3rem' }}>waf: <span className={styles.keyword}>true</span>,</span></div>
              <div className={styles.line}><span className={styles.ln}>6</span><span style={{ paddingLeft: '3rem' }}>ssl: <span className={styles.string}>'automatic'</span></span></div>
              <div className={styles.line}><span className={styles.ln}>7</span><span style={{ paddingLeft: '1.5rem' }}>{'}'}</span></div>
              <div className={styles.line}><span className={styles.ln}>8</span><span>{'});'}</span></div>
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: '2px', height: '1.2rem', background: 'var(--primary)', marginLeft: '1.5rem', display: 'inline-block' }}
              />
            </div>
          </motion.div>

          {/* Center Connection */}
          <div className={styles.arrow}>
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight size={48} />
            </motion.div>
          </div>

          {/* Browser Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={styles.browser}
          >
            <div className={styles.browserHeader}>
              <div className={styles.dot} style={{ background: '#dadce0', width: 8, height: 8 }} />
              <div className={styles.addressBar}>
                <Lock size={10} style={{ marginRight: 6 }} />
                https://hexstack-app.io/dashboard
              </div>
            </div>
            <div className={styles.browserContent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.skeletonTitle} />
                <div style={{ padding: '0.4rem 0.8rem', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', borderRadius: 8, fontSize: '0.7rem', fontWeight: 700 }}>
                  LIVE
                </div>
              </div>
              <div className={styles.skeletonText} />
              <div className={styles.skeletonText} style={{ width: '90%' }} />
              <div className={styles.skeletonText} style={{ width: '40%' }} />
              
              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, height: 80, background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: '1rem' }}>
                  <div style={{ fontSize: '0.6rem', color: '#999', marginBottom: 4 }}>LATENCY</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#333' }}>18ms</div>
                </div>
                <div style={{ flex: 1, height: 80, background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: '1rem' }}>
                  <div style={{ fontSize: '0.6rem', color: '#999', marginBottom: 4 }}>UPTIME</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#333' }}>99.9%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeToCloud;
