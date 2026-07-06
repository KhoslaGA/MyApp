"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AITerminal from "./AITerminal";
import LogoGlobe from "./LogoGlobe";
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

  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const globeRef = useRef(null);

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

  // Scroll choreography: pin the hero briefly and parallax its layers at
  // different depths while the canvas camera dives through the particle field.
  // Skipped entirely for reduced-motion users (native scroll, no pin).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=85%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => globeRef.current?.setScroll(self.progress),
        },
      });

      // Depth layers, slowest (deepest) → fastest (closest):
      // background sinks & dims as the camera pushes past it…
      tl.to(bgRef.current, { yPercent: 12, opacity: 0.3, ease: "none" }, 0);
      // …the terminal recedes into the mid-ground…
      tl.to(
        rightColRef.current,
        { yPercent: -18, scale: 0.94, opacity: 0.1, ease: "none" },
        0
      );
      // …and the headline lifts away in the foreground, moving most.
      tl.to(
        leftColRef.current,
        { yPercent: -46, opacity: 0, ease: "none" },
        0
      );
    }, heroRef);

    // Fonts (Fraunces) can reflow the hero after mount — recompute positions.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => ctx.revert();
  }, []);

  return (
    <section className={`wh ${styles.hero}`} ref={heroRef}>
      <div className={styles.bg} ref={bgRef} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.grid} />
        <div className={styles.noise} />
      </div>
      <div className={styles.globeLayer} aria-hidden="true">
        <LogoGlobe ref={globeRef} variant="hero" />
      </div>
      <div className={`wh-inner ${styles.inner}`}>
        <div className={styles.leftCol} ref={leftColRef}>
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
        </div>
        <div className={styles.rightCol} ref={rightColRef}>
        <div className={`${styles.right} ${mounted ? styles.rightIn : ""}`}>
          <AITerminal />
          <p className={styles.termCaption}>
            <span className="wh-em">Live demo</span> — this is the AI
            receptionist we&apos;d set up for you.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
