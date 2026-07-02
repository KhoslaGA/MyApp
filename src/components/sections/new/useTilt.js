"use client";
import { useEffect } from "react";

/**
 * Adds a subtle cursor-aware tilt to elements matching selector within a container.
 * Restraint by design: max ~5deg, springs back on leave. Disabled for touch/reduced-motion.
 */
export default function useTilt(containerRef, selector) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    const cards = Array.from(root.querySelectorAll(selector));
    const cleanups = [];

    cards.forEach((card) => {
      card.style.transformStyle = "preserve-3d";
      card.style.transition = "transform 300ms cubic-bezier(0.22,1,0.36,1)";

      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        card.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [containerRef, selector]);
}
