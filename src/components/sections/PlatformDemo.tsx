'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ShieldCheck, BarChart3, ChevronRight, Zap, Globe, Lock } from 'lucide-react';
import styles from './PlatformDemo.module.css';

const tabs = [
  {
    id: 'dev',
    title: 'Instant Deployment',
    desc: 'Push code and see it live globally in seconds with our optimized edge network.',
    icon: <Code2 size={20} />,
    color: 'var(--primary)'
  },
  {
    id: 'sec',
    title: 'Enterprise Security',
    desc: 'Multi-layer protection and automated compliance audits for peace of mind.',
    icon: <ShieldCheck size={20} />,
    color: 'var(--success, #10b981)'
  },
  {
    id: 'ana',
    title: 'Real-time Analytics',
    desc: 'Deep insights into user behavior and system performance at scale.',
    icon: <BarChart3 size={20} />,
    color: '#f59e0b'
  }
];

const PlatformDemo = () => {
  const [activeTab, setActiveTab] = useState('dev');

  return (
    <section className={styles.platformDemo} id="demo">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Product in Action</span>
          <h2 className={styles.title}>The power of Hexstack,<br />at your fingertips.</h2>
          <p className={styles.subtitle}>
            Experience how our platform simplifies the most complex parts of digital engineering.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Tabs Sidebar */}
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div style={{ color: activeTab === tab.id ? tab.color : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {tab.icon}
                  <span className={styles.tabTitle}>{tab.title}</span>
                </div>
                <p className={styles.tabDesc}>{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Interactive Display Area */}
          <div className={styles.display}>
            <div className={styles.windowHeader}>
              <div className={styles.dot} style={{ background: '#ff5f57' }} />
              <div className={styles.dot} style={{ background: '#febc2e' }} />
              <div className={styles.dot} style={{ background: '#28c840' }} />
              <div style={{ marginLeft: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                hexstack_platform / {activeTab === 'dev' ? 'deploy' : activeTab === 'sec' ? 'security' : 'analytics'}
              </div>
            </div>

            <div className={styles.windowContent}>
              <AnimatePresence mode="wait">
                {activeTab === 'dev' && (
                  <motion.div
                    key="dev"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.codeView}
                  >
                    <div className={styles.codeLine} style={{ width: '80%' }} />
                    <div className={styles.codeLine} style={{ width: '60%' }} />
                    <div className={styles.codeLine} style={{ width: '90%', background: 'rgba(var(--primary-rgb), 0.2)' }} />
                    <div className={styles.codeLine} style={{ width: '40%' }} />
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className={styles.terminal}
                    >
                      <div>$ hexstack deploy --prod</div>
                      <div style={{ color: 'var(--text-muted)' }}>Found 124 files...</div>
                      <div style={{ color: 'var(--primary)' }}>Optimizing assets... (1.2s)</div>
                      <div style={{ color: 'var(--success)' }}>✔ Production build complete.</div>
                      <div style={{ color: 'var(--success)' }}>✔ Deployed to 42 edge locations.</div>
                      <div style={{ color: '#fff', marginTop: '0.5rem' }}>Live at: https://hexstack-app.io</div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 'sec' && (
                  <motion.div
                    key="sec"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={styles.securityView}
                  >
                    <div className={styles.shieldGlow}>
                      <ShieldCheck size={64} />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <h4 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Security Protocol Active</h4>
                      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <div style={{ textAlign: 'center' }}>
                          <Lock size={20} color="var(--success)" style={{ marginBottom: '0.25rem' }} />
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ENCRYPTION</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>AES-256</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Globe size={20} color="var(--success)" style={{ marginBottom: '0.25rem' }} />
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>COMPLIANCE</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>SOC2 / GDPR</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Zap size={20} color="var(--success)" style={{ marginBottom: '0.25rem' }} />
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>THREATS</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>0 DETECTED</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'ana' && (
                  <motion.div
                    key="ana"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={styles.analyticsView}
                  >
                    <div className={styles.statsGrid}>
                      <div className={styles.statItem}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>DAU</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>12.4k</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--success)' }}>+14% ↑</div>
                      </div>
                      <div className={styles.statItem}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>CONV.</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>3.8%</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--success)' }}>+0.5% ↑</div>
                      </div>
                      <div className={styles.statItem}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>LATENCY</div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>18ms</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--success)' }}>Stable</div>
                      </div>
                    </div>
                    <div className={styles.chartPlaceholder}>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '70%' }}
                        transition={{ delay: 0.3, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '10%', width: '10%', background: 'rgba(var(--primary-rgb), 0.4)', borderRadius: '4px 4px 0 0' }} 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '45%' }}
                        transition={{ delay: 0.4, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '25%', width: '10%', background: 'rgba(var(--primary-rgb), 0.4)', borderRadius: '4px 4px 0 0' }} 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '90%' }}
                        transition={{ delay: 0.5, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '40%', width: '10%', background: 'rgba(var(--primary-rgb), 0.6)', borderRadius: '4px 4px 0 0' }} 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '60%' }}
                        transition={{ delay: 0.6, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '55%', width: '10%', background: 'rgba(var(--primary-rgb), 0.4)', borderRadius: '4px 4px 0 0' }} 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '75%' }}
                        transition={{ delay: 0.7, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '70%', width: '10%', background: 'rgba(var(--primary-rgb), 0.4)', borderRadius: '4px 4px 0 0' }} 
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: '85%' }}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={{ position: 'absolute', bottom: 0, left: '85%', width: '10%', background: 'rgba(var(--primary-rgb), 0.8)', borderRadius: '4px 4px 0 0' }} 
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDemo;
