'use client';

import React from 'react';
import { Cpu, Cloud, Network, Zap, Globe, TrendingUp, Layers, Shield } from 'lucide-react';
import styles from './ClientTrust.module.css';

const row1 = [
  { name: 'TechCore',  Icon: Cpu },
  { name: 'Lumina',    Icon: Zap },
  { name: 'Nexus',     Icon: Network },
  { name: 'Vortex',    Icon: Layers },
  { name: 'Aether',    Icon: Cloud },
  { name: 'Prism',     Icon: Globe },
  { name: 'Orbital',   Icon: Shield },
  { name: 'Zenith',    Icon: TrendingUp },
];

const row2 = [
  { name: 'Helios',    Icon: Globe },
  { name: 'Stratos',   Icon: Cloud },
  { name: 'Quasar',    Icon: Zap },
  { name: 'Pinnacle',  Icon: TrendingUp },
  { name: 'Vertex',    Icon: Network },
  { name: 'Solaris',   Icon: Cpu },
  { name: 'Meridian',  Icon: Layers },
  { name: 'Apex',      Icon: Shield },
];

const LogoItem = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => (
  <div className={styles.logoItem}>
    <span className={styles.logoIcon} aria-hidden="true">
      <Icon width={16} height={16} />
    </span>
    <span className={styles.logoName}>{name}</span>
  </div>
);

const MarqueeRow = ({
  items,
  reverse = false,
  ariaLabel,
}: {
  items: typeof row1;
  reverse?: boolean;
  ariaLabel: string;
}) => (
  <div
    className={`${styles.marqueeTrack} ${reverse ? styles.marqueeReverse : ''}`}
    aria-label={ariaLabel}
  >
    {/* Render items twice for seamless loop */}
    {[...items, ...items].map((item, i) => (
      <LogoItem
        key={`${item.name}-${i}`}
        name={item.name}
        Icon={item.Icon as React.FC<React.SVGProps<SVGSVGElement>>}
      />
    ))}
  </div>
);

const ClientTrust = () => (
  <section className={styles.clientTrust} aria-label="Trusted by section">
    {/* Header */}
    <div className={styles.header}>
      <span className={styles.dividerLine} aria-hidden="true" />
      <p className={styles.label}>TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
      <span className={styles.dividerLine} aria-hidden="true" />
    </div>

    {/* Marquee wrapper with edge fade */}
    <div className={styles.marqueeOuter}>
      <MarqueeRow items={row1} ariaLabel="Client logos row 1" />
      <MarqueeRow items={row2} reverse ariaLabel="Client logos row 2" />
    </div>

    {/* Bottom note */}
    <p className={styles.footnote}>
      and <strong>500+</strong> more companies building with Hexstack
    </p>
  </section>
);

export default ClientTrust;
