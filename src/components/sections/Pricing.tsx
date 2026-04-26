'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Section from '../ui/Section';
import MagneticButton from '../ui/MagneticButton';
import styles from './Pricing.module.css';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for early-stage startups validating their product.',
    priceMonthly: '$4,900',
    priceAnnual: '$3,900',
    period: '/project',
    features: [
      { name: 'Custom Landing Page', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: 'Analytics Integration', included: true },
      { name: 'Custom Animations', included: false },
      { name: 'Complex Integrations', included: false },
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    description: 'For scaling companies needing high-performance platforms.',
    priceMonthly: '$9,500',
    priceAnnual: '$7,600',
    period: '/project',
    features: [
      { name: 'Everything in Starter', included: true },
      { name: 'Full Web App Development', included: true },
      { name: 'Advanced SEO & Performance', included: true },
      { name: 'Custom Animations (Framer)', included: true },
      { name: 'Headless CMS Integration', included: true },
      { name: 'Priority Support', included: false },
    ],
    highlight: true,
    cta: 'Scale Your Product',
  },
  {
    name: 'Enterprise',
    description: 'Dedicated team and ongoing iteration for established brands.',
    priceMonthly: '$4,500',
    priceAnnual: '$3,600',
    period: '/month',
    features: [
      { name: 'Dedicated Development Pod', included: true },
      { name: 'Unlimited Revisions', included: true },
      { name: 'Ongoing Feature Development', included: true },
      { name: 'Enterprise Security & SLA', included: true },
      { name: 'Strategic Consultation', included: true },
      { name: '24/7 Priority Support', included: true },
    ],
    highlight: false,
    cta: 'Contact Sales',
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="gradient-text"
            style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Transparent Pricing
          </motion.span>
          <h2 className={styles.title}>Simple plans for <span className="gradient-text">ambitious teams</span>.</h2>
          <p className={styles.subtitle}>
            Invest in a platform that scales with you. No hidden fees, no surprises.
          </p>
          
          <div className={styles.toggleWrapper}>
            <span className={`${styles.toggleLabel} ${!isAnnual ? styles.activeLabel : ''}`}>Standard</span>
            <button 
              className={styles.toggle}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle pricing"
            >
              <div className={`${styles.toggleKnob} ${isAnnual ? styles.knobActive : ''}`} />
            </button>
            <div className={styles.annualLabelWrapper}>
              <span className={`${styles.toggleLabel} ${isAnnual ? styles.activeLabel : ''}`}>Annual Plan</span>
              <span className={styles.discountBadge}>Save 20%</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`${styles.card} ${plan.highlight ? styles.highlightedCard : ''}`}
            >
              {plan.highlight && (
                <div className={styles.mostPopularBadge}>Most Popular</div>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.priceContainer}>
                  <motion.span 
                    key={isAnnual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.price}
                  >
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </motion.span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>
              
              <div className={styles.divider} />
              
              <ul className={styles.featuresList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={`${styles.featureItem} ${!feature.included ? styles.featureExcluded : ''}`}>
                    {feature.included ? (
                      <div className={styles.checkIconWrapper}>
                        <Check size={14} className={styles.checkIcon} />
                      </div>
                    ) : (
                      <div className={styles.xIconWrapper}>
                        <X size={14} className={styles.xIcon} />
                      </div>
                    )}
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.cardFooter}>
                <MagneticButton strength={plan.highlight ? 0.2 : 0.1}>
                  <button className={`button ${plan.highlight ? 'button-primary' : 'button-outline'} ${styles.ctaButton}`}>
                    {plan.cta}
                  </button>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
