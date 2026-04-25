'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import styles from './Portfolio.module.css';

interface Project {
  title: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1],
        delay: (index % 2) * 0.2,
      }}
      className={styles.projectWrapper}
    >
      <div className={styles.projectCard}>
        <div className={styles.imageWrapper}>
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay} aria-hidden="true">
            <div className={styles.overlayIcon}>
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.tags} aria-label="Project technologies">
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className={styles.viewProject}
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study <ExternalLink size={14} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    title: 'Luxe Real Estate',
    category: 'Web Development',
    year: '2024',
    tags: ['Next.js', 'Framer Motion', 'Refined UX'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Quantum Fintech',
    category: 'App Development',
    year: '2023',
    tags: ['React Native', 'Fintech', 'Dashboard'],
    image:
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Nebula E-commerce',
    category: 'Digital Strategy',
    year: '2024',
    tags: ['Headless', 'Performance', 'Strategy'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Aura Wellness',
    category: 'UI/UX Design',
    year: '2023',
    tags: ['Design System', 'Branding', 'SAAS'],
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
  },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-text"
            style={{ fontWeight: 700, letterSpacing: '0.1em' }}
          >
            SELECTED WORKS
          </motion.span>
          <h2 className={styles.title}>
            Projects that <span className="gradient-text">Matter</span>.
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
