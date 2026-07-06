"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once, globally, on the client.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global smooth-scroll foundation.
 *
 * Wraps the app in the root layout and:
 *  - runs Lenis for weighted, inertial ("buttery") scrolling
 *  - drives Lenis from GSAP's single RAF ticker (one loop, perfectly synced)
 *  - updates ScrollTrigger on every Lenis scroll so scroll-driven
 *    animations stay in lockstep with the smoothed scroll position
 *
 * Reduced-motion discipline: if the user prefers reduced motion we skip
 * Lenis entirely and fall back to native scroll. ScrollTrigger still works
 * against native scroll, so future scroll choreography degrades gracefully.
 */
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      // exponential ease-out — the weighted, settling feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Keep ScrollTrigger in sync with Lenis' smoothed scroll position.
    lenis.on("scroll", ScrollTrigger.update);

    // Single RAF: let GSAP's ticker drive Lenis (Lenis wants ms, ticker gives s).
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    // Lenis manages its own smoothing; disable GSAP's lag correction.
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;
