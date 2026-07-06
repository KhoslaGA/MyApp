"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AITerminal from "./AITerminal";
import HeroCanvas from "./HeroCanvas";
import styles from "./HeroNew.module.css";

const ROTATING = [
  "websites that win local search",
  "AI receptionists that never miss a call",
  "chatbots that book appointments",
  "brands that look established",
];

const HeroNew = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATING.length);
        setVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className={`wh ${styles.hero}`}>
      <HeroCanvas />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
      <div className={`wh-inner ${styles.inner}`}>
        <div
          className={`${styles.left} ${mounted ? styles.leftIn : ""}`}
        >
          <p className={`wh-eyebrow ${styles.eyebrow}`}>
            Digital &amp; AI agency · Brampton &amp; the GTA
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
            High-performance websites paired with AI tools that answer, book,
            and follow up — so your business looks bigger and never misses a
            lead.
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
            <li>Web design</li>
            <li>AI receptionists</li>
            <li>Local SEO</li>
            <li>Automation</li>
          </ul>
        </div>
        <div className={`${styles.right} ${mounted ? styles.rightIn : ""}`}>
          <AITerminal />
          <p className={styles.termCaption}>
            <span className="wh-em">Live demo</span> — this is the AI
            receptionist we&apos;d set up for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
