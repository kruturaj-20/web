'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import SpotlightCard from '../ui/SpotlightCard';
import MagneticButton from '../ui/MagneticButton';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="gradient-text"
              style={{ fontWeight: 700, letterSpacing: '0.1em' }}
            >
              GET IN TOUCH
            </motion.span>
            <h2 className={styles.title}>
              Let's talk about your <span className="gradient-text">Vision</span>.
            </h2>
            <p className={styles.description}>
              Whether you're looking for a full-scale digital transformation or a high-performance
              website, we're here to help you lead.
            </p>

            <div className={styles.contactList}>
              {[
                { icon: <Mail size={20} aria-hidden="true" />, label: 'Email', value: 'hello@hexstack.digital', href: 'mailto:hello@hexstack.digital' },
                { icon: <Phone size={20} aria-hidden="true" />, label: 'Call', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: <MapPin size={20} aria-hidden="true" />, label: 'Visit', value: 'New York, NY 10001', href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={styles.contactItem}
                >
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div>
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className={styles.contactLink}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={styles.formArea}
          >
            <SpotlightCard className={styles.formCard}>
              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle size={48} className={styles.successIcon} aria-hidden="true" />
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successDesc}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    className="button button-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        className={styles.input}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        className={styles.input}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-service">Service Interested In</label>
                    <select id="contact-service" className={styles.input}>
                      <option value="web">Website Development</option>
                      <option value="app">App Development</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your project..."
                      className={styles.textarea}
                      required
                    ></textarea>
                  </div>
                  <MagneticButton strength={isSubmitting ? 0 : 0.1}>
                    <button
                      type="submit"
                      className="button button-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ display: 'inline-flex' }}>
                          <Send size={18} aria-hidden="true" />
                        </motion.div></>
                      ) : (
                        <>Send Message <Send size={18} aria-hidden="true" /></>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
