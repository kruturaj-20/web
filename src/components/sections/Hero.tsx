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
      {/* Window chrome */}
      <div className={styles.dashChrome}>
        <div className={styles.chromeDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.dashTabs}>
          <span className={`${styles.dashTab} ${styles.dashTabActive}`}>Overview</span>
          <span className={styles.dashTab}>Analytics</span>
          <span className={styles.dashTab}>Users</span>
        </div>
        <div className={styles.liveBadge} aria-label="Live data">
          <span className={styles.livePulse} aria-hidden="true" />
          LIVE
        </div>
      </div>

      {/* Stat chips */}
      <div className={styles.dashStats}>
        {[
          { label: 'MRR', display: '$48.2K', delta: '+12%', up: true },
          { label: 'Active Users', display: '2,847', delta: '+8%', up: true },
          { label: 'Churn Rate', display: '0.4%', delta: '-0.2%', up: false },
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
            <span
              className={`${styles.dashStatDelta} ${s.up ? styles.deltaUp : styles.deltaDown}`}
            >
              {s.delta}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bar chart */}
      <div className={styles.chartArea}>
        <div className={styles.chartHeader}>
          <span className={styles.chartTitle}>Revenue trend</span>
          <span className={styles.chartPeriod}>Last 10 weeks</span>
        </div>
        <div className={styles.chartBars} role="img" aria-label="Revenue trend bar chart">
          {chartHeights.map((h, i) => (
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

      <div className={styles.dashDivider} aria-hidden="true" />

      {/* Activity feed */}
      <div className={styles.dashActivity}>
        {activityItems.map((item, i) => (
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
              aria-hidden="true"
            />
            <span className={styles.activityText}>{item.text}</span>
            <span className={styles.activityTime}>{item.time}</span>
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.03em', '0.05em']);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } },
  };

  /* Per-property transition helper for float loop */
  const floatTransition = (entranceDelay: number, loopDelay: number) => ({
    opacity: { delay: entranceDelay, duration: 0.5, ease: 'easeOut' as const },
    scale:   { delay: entranceDelay, duration: 0.5, ease: 'easeOut' as const },
    y: {
      delay: loopDelay,
      duration: 4.5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      repeatType: 'loop' as const,
    },
  });

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* BG glows */}
      <motion.div style={{ y: y1 }} className={styles.bgGlow1} aria-hidden="true" />
      <motion.div style={{ y: y2 }} className={styles.bgGlow2} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>

        {/* ── LEFT: Content ─────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity, scale }}
          className={styles.content}
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Vanguard Platform 2.0 is now live</span>
          </motion.div>

          <div className={styles.titleWrapper}>
            <motion.h1
              variants={itemVariants}
              style={{ letterSpacing }}
              className={styles.title}
            >
              Build & Scale <span className="gradient-text">Exceptional</span>
              <br />Digital Products.
            </motion.h1>
          </div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Vanguard is the complete digital engineering platform. We combine elite design and high-performance development to bring your visionary ideas to life.
          </motion.p>

          {/* Social proof */}
          <motion.div variants={itemVariants} className={styles.socialProof}>
            <div className={styles.avatarStack} aria-label="Customer avatars">
              {['u=a1', 'u=b2', 'u=c3', 'u=d4'].map((q, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?${q}`}
                  alt=""
                  className={styles.proofAvatar}
                  width={36}
                  height={36}
                />
              ))}
            </div>
            <p className={styles.proofText}>
              <strong>500+</strong> products launched on Vanguard
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <MagneticButton strength={0.2}>
              <button
                className="button button-primary"
                aria-label="Get Started with Vanguard"
              >
                Get Started <ArrowRight size={18} aria-hidden="true" />
              </button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <button className="button button-outline" aria-label="Book a Demo">
                <Play size={15} fill="currentColor" aria-hidden="true" />
                Book a Demo
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          aria-hidden="true"
        >
          <div className={styles.scrollLine} />
          <div className={styles.scrollDot} />
        </motion.div>

        {/* ── RIGHT: Dashboard visual ────────────────────────── */}
        <div className={styles.visual}>
          {/* Ambient glow behind dashboard */}
          <div className={styles.dashGlow} aria-hidden="true" />

          {/* 3-D perspective container — also the positioning root for cards */}
          <motion.div
            className={styles.perspectiveWrapper}
            initial={{ opacity: 0, x: 80, rotateY: -18, rotateX: 6 }}
            animate={{ opacity: 1, x: 0, rotateY: -6, rotateX: 2 }}
            whileHover={{ rotateY: -2, rotateX: 1, scale: 1.015 }}
            transition={{
              opacity:  { duration: 0.6, delay: 0.6 },
              x:        { duration: 1.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
              rotateY:  { duration: 1.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
              rotateX:  { duration: 1.6, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
              scale:    { type: 'spring', stiffness: 120, damping: 20 },
            }}
            style={{ y: y2 }}
          >
            <div className={styles.dashboardWrapper}>
              <DashboardMockup />
            </div>

            {/* Floating card: Active Users — top-right */}
            <motion.div
              className={`${styles.floatingCard} ${styles.cardUsers}`}
              initial={{ opacity: 0, scale: 0.7, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={floatTransition(1.9, 2.5)}
            >
              <div className={styles.usersOnline}>
                <span className={styles.onlineDot} aria-hidden="true" />
                <Users size={15} aria-hidden="true" />
              </div>
              <div>
                <div className={styles.floatingCardValue}>2,847</div>
                <div className={styles.floatingCardLabel}>Active Now</div>
              </div>
            </motion.div>

            {/* Floating card: MRR Growth — bottom-left */}
            <motion.div
              className={`${styles.floatingCard} ${styles.cardMrr}`}
              initial={{ opacity: 0, scale: 0.7, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={floatTransition(2.1, 3.0)}
            >
              <TrendingUp size={18} className={styles.trendIcon} aria-hidden="true" />
              <div>
                <div className={`${styles.floatingCardValue} ${styles.valueGreen}`}>+23%</div>
                <div className={styles.floatingCardLabel}>MRR Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
