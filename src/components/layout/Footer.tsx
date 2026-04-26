'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              HEXSTACK<span className="gradient-text">DIGITAL</span>
            </Link>
            <p className={styles.brandDesc}>
              Engineering exceptional digital experiences for the next generation of industry leaders.
            </p>
            <div className={styles.socials}>
              {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
                <MagneticButton key={idx} strength={0.4}>
                  <Link href="#" className={styles.socialLink}>
                    <Icon size={20} />
                  </Link>
                </MagneticButton>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link href="#services">Services</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#process">Process</Link>
              <Link href="#about">About Us</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <Link href="#services">Web Development</Link>
              <Link href="#services">App Development</Link>
              <Link href="#services">Social Marketing</Link>
              <Link href="#services">UI/UX Design</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <div className={styles.contactInfo}>
                <p><Mail size={16} /> hexstacksolutions@gmail.com</p>
                <p><Phone size={16} /> +91 7972707589</p>
                <p><MapPin size={16} /> Palghar, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Hexstack Digital. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
