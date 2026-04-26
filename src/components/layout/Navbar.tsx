'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import styles from './Navbar.module.css'; // Importing CSS modules

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 20);
      if (current <= 80) {
        setIsHidden(false);
      } else if (current > lastScrollY.current + 5) {
        setIsHidden(true);
        setIsMobileMenuOpen(false);
      } else if (current < lastScrollY.current - 5) {
        setIsHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#features' },
    { name: 'How it Works', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}
      aria-label="Main navigation"
    >
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} aria-label="Hexstack Platform – Home">
          HEXSTACK<span className="gradient-text">PLATFORM</span>
        </Link>

        <div className={styles.desktopLinks} role="list">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              role="listitem"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <MagneticButton strength={0.15}>
                <Link href={link.href} className={styles.navLink} data-text={link.name}>
                  {link.name.split('').map((char, i) => (
                    <span key={i} style={{ transitionDelay: `${i * 0.02}s` }}>{char}</span>
                  ))}
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          >
            <MagneticButton strength={0.2}>
              <button className="button button-primary" aria-label="Get started with Hexstack">
                Get Started <ArrowRight size={18} aria-hidden="true" />
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileLinks}>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={link.href} className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={styles.mobileCta}>
                <button className="button button-primary" style={{ width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
