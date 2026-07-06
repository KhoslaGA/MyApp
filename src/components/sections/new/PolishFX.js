"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./PolishFX.module.css";

/**
 * Desktop polish layer — mounted once in the root layout.
 *
 *  1. Custom cursor: a small accent dot that tracks precisely + a ring that
 *     lags behind, growing over interactive elements. The native cursor is
 *     hidden (restored on form fields so typing still works).
 *  2. Magnetic buttons: `.wh-btn`s ease toward the pointer while hovered.
 *
 * Everything runs on GSAP's existing single ticker (no extra RAF → 60fps) and
 * uses transform-only writes (GPU compositor, no layout thrash). The whole
 * layer is skipped unless the device has a fine pointer AND the user hasn't
 * asked for reduced motion — so touch and reduced-motion get nothing at all.
 */
const INTERACTIVE = 'a, button, .wh-btn, [role="button"]';
const FIELD = "input, textarea, select, [contenteditable='true']";

const PolishFX = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // decide once, on the client, whether this device should get the effects
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    root.classList.add("wh-cursor-active");

    // pointer + eased cursor positions
    let px = window.innerWidth / 2;
    let py = window.innerHeight / 2;
    let dx = px, dy = py, rx = px, ry = py;
    let shown = false;

    // magnetic button state
    let activeBtn = null;
    let xTo = null;
    let yTo = null;

    const activate = (btn) => {
      if (activeBtn === btn) return;
      activeBtn = btn;
      btn.classList.add("wh-mag");
      xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
    };
    const release = (btn) => {
      if (activeBtn !== btn) return;
      activeBtn = null;
      xTo = null;
      yTo = null;
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => btn.classList.remove("wh-mag"),
      });
    };

    const onMove = (e) => {
      px = e.clientX;
      py = e.clientY;
      if (!shown) {
        shown = true;
        dot.classList.add(styles.visible);
        ring.classList.add(styles.visible);
      }
    };
    const onOver = (e) => {
      const t = e.target;
      if (!t.closest) return;
      const btn = t.closest(".wh-btn");
      if (btn) activate(btn);
      if (t.closest(INTERACTIVE)) ring.classList.add(styles.hover);
      if (t.closest(FIELD)) {
        dot.classList.remove(styles.visible);
        ring.classList.remove(styles.visible);
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (!t.closest) return;
      const rel = e.relatedTarget;
      const btn = t.closest(".wh-btn");
      if (btn && !btn.contains(rel)) release(btn);
      const inter = t.closest(INTERACTIVE);
      if (inter && !inter.contains(rel)) ring.classList.remove(styles.hover);
      const field = t.closest(FIELD);
      if (field && !field.contains(rel) && shown) {
        dot.classList.add(styles.visible);
        ring.classList.add(styles.visible);
      }
    };
    // if the pointer leaves the window entirely, fade the cursor out
    const onLeaveWindow = () => {
      shown = false;
      dot.classList.remove(styles.visible);
      ring.classList.remove(styles.visible);
    };

    const tick = () => {
      // dot tracks tightly, ring trails for a soft, weighted feel
      dx += (px - dx) * 0.4;
      dy += (py - dy) * 0.4;
      rx += (px - rx) * 0.16;
      ry += (py - ry) * 0.16;
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (activeBtn && xTo && yTo) {
        const r = activeBtn.getBoundingClientRect();
        xTo((px - (r.left + r.width / 2)) * 0.4);
        yTo((py - (r.top + r.height / 2)) * 0.4);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    gsap.ticker.add(tick);

    return () => {
      root.classList.remove("wh-cursor-active");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      gsap.ticker.remove(tick);
      if (activeBtn) {
        gsap.set(activeBtn, { x: 0, y: 0 });
        activeBtn.classList.remove("wh-mag");
      }
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
};

export default PolishFX;
