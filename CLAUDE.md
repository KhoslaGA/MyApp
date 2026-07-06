# CLAUDE.md — Webhub4U

Guidance for Claude Code when working in this repo. Read this first, every session.

## What this is

Webhub4U — a digital & AI agency site (Brampton / GTA). Next.js 14.2.5, JavaScript (no TypeScript), App Router. The site sells web design, AI receptionists/chatbots, local SEO, and automation. Positioning: premium, "king of web design" visual craft, honest (NO fake stats/logos/testimonials — this is a hard rule).

Deployed on Vercel. `main` = production, `revamp` = active work branch. Always work on `revamp` unless told otherwise.

## Architecture: the two-layer rule

This repo started as a purchased template ("Bastun"). We are replacing it with our own components WITHOUT fighting the 229 KB template `globals.css`.

- **Our code lives in `src/components/sections/new/`** — all new components, each with a co-located `.module.css`.
- **Our design system is `src/app/theme.css`** — scoped under a `.wh` wrapper class so it never collides with template styles.
- **Never edit `src/app/globals.css`** (the template's). If a style is needed, add it to `theme.css` or a module.
- Every new component's root element carries the `wh` class (e.g. `<section className={`wh ${styles.wrap}`}>`) so design tokens resolve.

Pages compose from `new/` components via `PageShell` (nav + footer wrapper) + `PageHero`.

## Design tokens (theme.css, under `.wh`)

- Surfaces: `--wh-bg` #fff, `--wh-bg-soft` #f5f3ee, `--wh-bg-dark` #0b0e17, `--wh-bg-dark-soft` #141927
- Text: `--wh-text` #0e1117, `--wh-text-muted` #5a6370, `--wh-text-inv` #fff, `--wh-text-inv-muted` #9aa2b1
- Accent: `--wh-accent` #ff4d1c (electric orange), `--wh-accent-soft` #ffe4d9
- Borders: `--wh-border` #e7e4dd, `--wh-border-dark` #232a3b
- Fonts: `--wh-font-display` = Fraunces (serif, use for headings + italic accents), `--wh-font-body` = Geist
- Motion: `--wh-ease` cubic-bezier(0.22,1,0.36,1); durations `--wh-dur-fast` 200ms, `--wh-dur` 400ms
- Layout: `--wh-container` 1240px, `--wh-gutter` clamp(20px,4vw,48px), radii `--wh-radius` 14px / `--wh-radius-lg` 22px

Shared primitives (defined in theme.css): `.wh-inner` (max-width container), `.wh-display` (Fraunces heading), `.wh-em` (italic orange accent — used inside headings like `<span className="wh-em">growth systems</span>`), `.wh-eyebrow` (uppercase label w/ orange tick), `.wh-btn` + `.wh-btn--primary` / `.wh-btn--ghost-dark`.

## Visual style rules

- Alternate light (`--wh-bg` / `--wh-bg-soft`) and dark (`--wh-bg-dark`) sections down the page for rhythm.
- Headings: Fraunces, with ONE italic-orange `.wh-em` accent phrase. Don't over-accent.
- Dark sections get a radial orange glow (see HeroNew/CtaNew `::before/::after` patterns).
- Restraint over spectacle. Sophisticated/premium, Pixelcarve-tier — not "every effect at once."

## Motion & 3D

- **Scroll reveal:** wrap sections/cards in `<Reveal delay={ms}>` (`new/Reveal.js`). Staggered via delay. It's IntersectionObserver-based and respects `prefers-reduced-motion`.
- **Card tilt:** `useTilt(ref, selector)` (`new/useTilt.js`) — subtle ~5deg cursor tilt. Disabled on touch + reduced-motion.
- **WebGL:** Three.js is installed. `HeroCanvas.js` = particle-ocean hero bg; `LogoGlobe.js` = the brand globe as 3D. 
- **3D/WebGL performance guards are MANDATORY** on any new canvas: cap `setPixelRatio(Math.min(devicePixelRatio, 1.5))`, pause the RAF loop when off-screen via IntersectionObserver, skip entirely for `prefers-reduced-motion`, and guard `new WebGLRenderer` in try/catch with a graceful fallback. Dispose geometries/materials/renderer on cleanup.
- Planned next: GSAP + ScrollTrigger + Lenis for scroll-driven choreography. If adding, keep the same perf/reduced-motion discipline.

## Hard rules

- **Honesty:** never add fake testimonials, fake client logos, or invented stats/counters. Work page uses own-site-as-case-study until real client work exists.
- **Child of the two-layer rule:** never touch template `globals.css`; never import template `PageWrapper` into new pages.
- **Client vs server:** only add `"use client"` to components that need state/effects/interactivity (Hero, Nav, forms, Reveal, canvases). Keep pages as server components where possible.
- **Copyright/brand:** logo assets live in `public/` (`logo-nav-t.png` transparent for dark bg). Keep transparency intact.
- **Contact form:** posts to `src/app/api/sendEmail/route.js` (Resend). It fails gracefully if `RESEND_API_KEY` is unset — keep that fallback.

## Workflow

- Work on `revamp`. Run `npm run dev` and verify visually before committing.
- `npm run build` must pass before pushing. (Note: Google Fonts fetch may fail in sandboxed/offline envs — that's environmental, not a code error.)
- Commit messages: concise, prefixed by phase/intent (e.g. "Phase 7: GSAP scroll choreography").
- Env vars (set in Vercel, not committed): `RESEND_API_KEY`, optional `EMAIL_TO`, `EMAIL_FROM`.

## Roadmap context

Sequence: (1) site revamp — IN PROGRESS, homepage + all inner pages rebuilt; (2) local SEO / ranking — city landing pages (`/web-design-{city}`) with LocalBusiness schema, still TODO; (3) AI service line + live demos. When unsure what to build next, ask; default toward the current phase.
