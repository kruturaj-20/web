'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../ui/Section';
import SpotlightCard from '../ui/SpotlightCard';
import styles from './FAQ.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

const FAQItem = ({ question, answer, isOpen, onClick, id }: FAQItemProps) => {
  const answerId = `${id}-answer`;

  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.questionButton} ${isOpen ? styles.open : ''}`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={id}
      >
        <h3 className={styles.questionText}>{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={styles.answerWrapper}
          >
            <div className={styles.answerContent}>
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Our timelines vary depending on the scope. A premium website typically takes 6-8 weeks, while complex applications may take 3-5 months. We prioritize quality and thorough testing over rushing.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer:
        'Absolutely. We provide comprehensive maintenance packages that include security updates, performance monitoring, and content updates to ensure your digital asset remains world-class.',
    },
    {
      question: 'How do you handle branding and design?',
      answer:
        'We offer full-spectrum visual identity services. Our creative director works closely with you to define your brand personality, color theory, and typography before we ever write a line of code.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'We lead with Next.js, React, and TypeScript for the frontend, and robust cloud architectures like AWS or Vercel. For apps, we use React Native and Flutter for high-performance cross-platform delivery.',
    },
  ];

  return (
    <Section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.header}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="gradient-text"
              style={{ fontWeight: 700, letterSpacing: '0.1em' }}
            >
              COMMON INQUIRIES
            </motion.span>
            <h2 className={styles.title}>
              Your Questions, <span className="gradient-text">Answered</span>.
            </h2>
            <p className={styles.subtitle}>
              Everything you need to know about working with Vanguard to engineer your digital
              future.
            </p>
          </div>

          <div className={styles.faqList} role="list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard className={styles.faqCard}>
                  <FAQItem
                    id={`faq-item-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
