"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroNew.module.css";

const ROTATING = [
  "websites that win local search",
  "AI receptionists that never miss a call",
  "brands that look established",
  "chatbots that book appointments",
  "SEO that puts you on the map",
];

const HeroNew = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATING.length);
        setVisible(true);
      }, 350);
    }, 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={`wh ${styles.hero}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={`wh-inner ${styles.inner}`}>
        <p className={`wh-eyebrow ${styles.eyebrow}`}>
          Digital agency · Brampton &amp; the GTA
        </p>
        <h1 className={`wh-display ${styles.title}`}>
          We build <span className="wh-em">growth systems</span> for modern
          businesses.
        </h1>
        <p className={styles.rotatorLine}>
          <span
            className={`${styles.rotator} ${
              visible ? styles.rotatorIn : styles.rotatorOut
            }`}
          >
            {ROTATING[idx]}
          </span>
        </p>
        <p className={styles.sub}>
          Webhub4U pairs high-performance websites with AI-powered tools —
          receptionists, chatbots, and automation — so your business looks
          bigger, responds faster, and never misses a lead.
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className="wh-btn wh-btn--primary">
            Book an intro call
          </Link>
          <Link href="/projects" className="wh-btn wh-btn--ghost-dark">
            See our work
          </Link>
        </div>
        <ul className={styles.pillars}>
          <li>Web design &amp; development</li>
          <li>AI receptionists &amp; chatbots</li>
          <li>Local SEO</li>
          <li>Branding</li>
          <li>Automation</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroNew;
