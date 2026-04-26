'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
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
        <span className={styles.questionText}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }}
          aria-hidden="true"
          className={styles.chevron}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
      category: 'General',
      items: [
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
      ],
    },
    {
      category: 'Services',
      items: [
        {
          question: 'How do you handle branding and design?',
          answer:
            'We offer full-spectrum visual identity services. Our creative director works closely with you to define your brand personality, color theory, and typography before we ever write a line of code.',
        },
        {
          question: 'What technologies do you specialize in?',
          answer:
            'We lead with Next.js, React, and TypeScript for the frontend, and robust cloud architectures like AWS or Vercel. For apps, we use React Native and Flutter for high-performance delivery.',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <Section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.header}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.badge}
            >
              <MessageCircle size={14} className={styles.badgeIcon} />
              <span>SUPPORT HUB</span>
            </motion.div>
            <h2 className={styles.title}>
              Your Questions, <span className="gradient-text">Answered</span>.
            </h2>
            <p className={styles.subtitle}>
              Everything you need to know about working with Hexstack to engineer your digital
              future.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.ctaCard}
            >
              <h4>Still have questions?</h4>
              <p>Can't find what you're looking for? Chat with our team.</p>
              <button className="button button-primary">
                Contact Support <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.faqList}
          >
            {faqs.map((category, catIdx) => (
              <div key={catIdx} className={styles.categorySection}>
                <h4 className={styles.categoryTitle}>{category.category}</h4>
                <div className={styles.categoryItems}>
                  {category.items.map((faq, index) => {
                    const globalIndex = catIdx * 10 + index;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                      >
                        <SpotlightCard className={styles.faqCard}>
                          <FAQItem
                            id={`faq-item-${globalIndex}`}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === globalIndex}
                            onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                          />
                        </SpotlightCard>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;

