'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from '../ui/Section';
import SpotlightCard from '../ui/SpotlightCard';
import styles from './Testimonials.module.css';

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className={styles.stars} aria-label={`Rated ${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true" />
    ))}
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at Luxe Real Estate',
      content: 'Vanguard Digital transformed our online presence. Their attention to detail and technical mastery is unmatched in the industry.',
      avatar: 'https://i.pravatar.cc/112?u=sarah-johnson',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder of Quantum Fintech',
      content: 'The team delivered our mobile app ahead of schedule. The user response has been phenomenal. Truly a world-class agency.',
      avatar: 'https://i.pravatar.cc/112?u=michael-chen',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Director at Nebula E-commerce',
      content: 'Our conversion rates spiked by 40% after the redesign. Their strategic approach to digital growth is a game changer.',
      avatar: 'https://i.pravatar.cc/112?u=elena-rodriguez',
      rating: 5,
    },
  ];

  const [featured, ...others] = testimonials;

  return (
    <Section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-text"
            style={{ fontWeight: 700, letterSpacing: '0.1em' }}
          >
            CLIENT VOICES
          </motion.span>
          <h2 className={styles.title}>
            What they say <span className="gradient-text">About Us</span>.
          </h2>
        </div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className={styles.featuredWrapper}
        >
          <SpotlightCard className={`${styles.card} ${styles.featuredCard}`}>
            <div className={`${styles.cardInner} ${styles.featuredInner}`}>
              <div className={styles.featuredLeft}>
                <div className={styles.quoteIcon} aria-hidden="true">
                  <Quote size={48} />
                </div>
                <StarRating rating={featured.rating} />
                <p className={`${styles.content} ${styles.featuredContent}`}>
                  &ldquo;{featured.content}&rdquo;
                </p>
              </div>
              <div className={styles.featuredRight}>
                <img
                  src={featured.avatar}
                  alt={featured.name}
                  className={`${styles.avatar} ${styles.featuredAvatar}`}
                  width={88}
                  height={88}
                />
                <h4 className={styles.name}>{featured.name}</h4>
                <p className={styles.role}>{featured.role}</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Remaining testimonials */}
        <div className={styles.grid}>
          {others.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <SpotlightCard className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.quoteIcon} aria-hidden="true">
                    <Quote size={40} fill="var(--primary-glow)" />
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className={styles.content}>&ldquo;{testimonial.content}&rdquo;</p>
                  <div className={styles.author}>
                    <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} width={56} height={56} />
                    <div>
                      <h4 className={styles.name}>{testimonial.name}</h4>
                      <p className={styles.role}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
