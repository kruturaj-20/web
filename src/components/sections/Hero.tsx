'use client';

import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import styles from './Hero.module.css';

/* ─── Chart data ─────────────────────────────────────────────── */
const chartHeights = [32, 48, 40, 62, 50, 75, 58, 85, 70, 92];

const activityItems = [
  { text: 'Acme Corp upgraded to Pro', time: '2m ago', color: 'var(--primary)' },
  { text: 'New signup: sarah@bloom.io', time: '14m ago', color: 'var(--success)' },
  { text: 'Payment $2,400 received', time: '1h ago', color: 'var(--secondary)' },
  { text: 'NPS survey score: 9/10', time: '2h ago', color: '#f59e0b' },
];

/* ─── Dashboard Mockup ───────────────────────────────────────── */
const DashboardMockup = () => {
  const statsVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1.0 + i * 0.15, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const activityVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 1.4 + i * 0.1, duration: 0.45, ease: 'easeOut' },
    }),
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashChrome}>
        <div className={styles.chromeDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.dashTabs}>
          <span className={`${styles.dashTab} ${styles.dashTabActive}`}>Overview</span>
          <span className={styles.dashTab}>Analytics</span>
        </div>
        <div className={styles.liveBadge} aria-label="Live data">
          <span className={styles.livePulse} aria-hidden="true" />
          LIVE
        </div>
      </div>

      <div className={styles.dashStats}>
        {[
          { label: 'MRR', display: '$48.2K', delta: '+12%', up: true },
          { label: 'Users', display: '2,847', delta: '+8%', up: true },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.dashStatChip}
            custom={i}
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <span className={styles.dashStatLabel}>{s.label}</span>
            <span className={styles.dashStatValue}>{s.display}</span>
          </motion.div>
        ))}
      </div>

      <div className={styles.chartArea}>
        <div className={styles.chartBars} role="img" aria-label="Revenue trend">
          {chartHeights.slice(0, 8).map((h, i) => (
            <div
              key={i}
              className={styles.chartBar}
              style={
                {
                  '--bar-height': `${h}%`,
                  '--bar-delay': `${0.9 + i * 0.07}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className={styles.dashActivity}>
        {activityItems.slice(0, 3).map((item, i) => (
          <motion.div
            key={i}
            className={styles.activityRow}
            custom={i}
            variants={activityVariants}
            initial="hidden"
            animate="visible"
          >
            <span
              className={styles.activityDot}
              style={{ background: item.color }}
            />
            <span className={styles.activityText}>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  };

  const titleWords = "Build & Scale Exceptional Digital Products.".split(" ");

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Dynamic Background */}
      <div className={styles.gridContainer}>
        <div className={styles.gridOverlay} />
        <div className={styles.gridLines} />
      </div>

      {/* Animated Beams */}
      <div className={styles.beamsContainer}>
        <motion.div 
          animate={{ x: ["-100%", "200%"], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className={styles.beam}
          style={{ top: '20%' }}
        />
        <motion.div 
          animate={{ x: ["-100%", "200%"], opacity: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className={styles.beam}
          style={{ top: '60%' }}
        />
      </div>

      <motion.div style={{ y: y1 }} className={styles.bgGlow1} aria-hidden="true" />
      <motion.div style={{ y: y2 }} className={styles.bgGlow2} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ opacity, scale }}
          className={styles.content}
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Platform 2.0 is now live</span>
          </motion.div>

          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  className={word === "Exceptional" ? "gradient-text" : ""}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p 
            variants={itemVariants} 
            transition={{ delay: 0.8 }}
            className={styles.subtitle}
          >
            Hexstack is the complete digital engineering platform. We combine elite design and high-performance development to bring your visionary ideas to life.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            transition={{ delay: 1 }}
            className={styles.ctas}
          >
            <MagneticButton strength={0.2}>
              <button className="button button-primary">
                Get Started <ArrowRight size={18} />
              </button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <button className="button button-outline">
                <Play size={15} fill="currentColor" />
                Book a Demo
              </button>
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            transition={{ delay: 1.2 }}
            className={styles.socialProof}
          >
            <div className={styles.avatarStack}>
              {['u=a1', 'u=b2', 'u=c3', 'u=d4'].map((q, i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${q}`}
                  alt=""
                  className={styles.proofAvatar}
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <p className={styles.proofText}>
              <strong>500+</strong> products launched
            </p>
          </motion.div>
        </motion.div>

        <div className={styles.visual}>
          <div className={styles.dashGlow} />
          <motion.div
            className={styles.perspectiveWrapper}
            initial={{ opacity: 0, rotateY: -15, rotateX: 5 }}
            animate={{ opacity: 1, rotateY: -5, rotateX: 2 }}
            whileHover={{ rotateY: -2, rotateX: 1, scale: 1.02 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: y2 }}
          >
            <div className={styles.dashboardWrapper}>
              <DashboardMockup />
            </div>

            <motion.div
              className={`${styles.floatingCard} ${styles.cardUsers}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={styles.usersOnline}>
                <span className={styles.onlineDot} />
                <Users size={14} />
              </div>
              <div className={styles.floatingCardValue}>2,847</div>
            </motion.div>

            <motion.div
              className={`${styles.floatingCard} ${styles.cardMrr}`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={16} className={styles.trendIcon} />
              <div className={`${styles.floatingCardValue} ${styles.valueGreen}`}>+23%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

