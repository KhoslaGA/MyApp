"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Homepage motion language — one consistent vocabulary of scroll-driven
 * entrances, so the whole page moves as a single system:
 *
 *   • SplitHeading — headings split into lines that rise out of a mask
 *   • RevealText   — eyebrows / ledes / paragraphs rise + fade
 *   • useStagger   — card / tier / step grids cascade in with depth (scale
 *                    + a touch of rotateX), staggered child by child
 *
 * All three share the same ease, trigger point, and timing, fire once on
 * scroll-in, and no-op under prefers-reduced-motion (content stays fully
 * visible). GSAP + ScrollTrigger are already Lenis-synced globally.
 */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// --- shared tokens: the single source of the motion language ---
const EASE = "power3.out";
const DUR = 0.9;
const START = "top 82%";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// run before paint on the client, but fall back to useEffect during SSR
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Heading whose lines rise up out of a clip mask, staggered.
 * Reverts the SplitText back to clean markup once revealed (keeps the DOM
 * tidy and avoids stale line-breaks on resize).
 */
export const SplitHeading = ({
  as: Tag = "h2",
  className = "",
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    let split;
    const ctx = gsap.context(() => {
      gsap.set(el, { autoAlpha: 0 }); // hide until lines are ready (no FOUC)
      const run = () => {
        if (!el.isConnected) return;
        split = new SplitText(el, {
          type: "lines",
          mask: "lines",
          linesClass: "whLine",
        });
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(split.lines, {
          yPercent: 118,
          opacity: 0,
          duration: DUR,
          ease: EASE,
          stagger: 0.12,
          delay: delay / 1000,
          scrollTrigger: { trigger: el, start: START, once: true },
          onComplete: () => {
            if (split) {
              split.revert();
              split = null;
            }
          },
        });
      };
      // wait for web fonts so line wrapping is measured correctly
      if (document.fonts?.ready) document.fonts.ready.then(run);
      else run();
    }, el);

    return () => {
      if (split) split.revert();
      ctx.revert();
    };
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

/** Generic block that rises + fades in on scroll (eyebrows, ledes, rows). */
export const RevealText = ({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
  y = 28,
  ...rest
}) => {
  const ref = useRef(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        delay: delay / 1000,
        scrollTrigger: { trigger: el, start: START, once: true },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};

/**
 * Cascade a container's direct children in on scroll, with depth.
 * Share the SAME ref you pass to useTilt — this temporarily suspends the
 * tilt transition during the entrance, then restores it, so the two never
 * fight over `transform`.
 */
export function useStagger(ref, opts = {}) {
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const items = gsap.utils.toArray(el.children);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: opts.y ?? 46,
        autoAlpha: 0,
        scale: opts.scale ?? 0.93,
        rotateX: opts.rotateX ?? 6,
        transformPerspective: 900,
        transformOrigin: "50% 100%",
        duration: DUR,
        ease: EASE,
        stagger: opts.stagger ?? 0.1,
        clearProps: "transform",
        scrollTrigger: { trigger: el, start: opts.start ?? START, once: true },
        onStart: () =>
          items.forEach((c) => {
            c.__tr = c.style.transition;
            c.style.transition = "none";
          }),
        onComplete: () =>
          items.forEach((c) => {
            c.style.transition = c.__tr || "";
          }),
      });
    }, el);
    return () => ctx.revert();
  }, [ref]);
}
