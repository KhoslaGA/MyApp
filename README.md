# Webhub4U

Marketing site for **Webhub4u Inc.** — a Brampton-based digital agency: websites, local SEO, and AI tools (AI receptionist, missed-call text-back, chatbots, automation) for businesses across the Greater Toronto Area.

Built as a lead-capture machine for the AI-receptionist offer and a local-SEO ranking asset.

## Stack

- **Next.js 14** (App Router) · React 18
- **Design system:** `src/app/theme.css` (the `.wh` namespace) + CSS Modules under `src/components/sections/new/`. Fonts: Fraunces (display) + Geist (body).
- Motion: GSAP + Lenis. 3D accents: three.js.
- Email: Resend. Deploy: Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Key routes

| Route | What it is |
|---|---|
| `/` | Homepage |
| `/ai-receptionist` | Flagship offer — AI receptionist ($997 setup + $397/mo) |
| `/missed-call-text-back` | Entry offer ($197/mo) |
| `/roi` | Missed-call ROI calculator |
| `/locations` + `/locations/[city]` | Local-SEO city pages (12 GTA cities) |
| `/services`, `/about`, `/contact`, `/blogs`, `/faq` | Standard pages |
| `/api/demo-request`, `/api/sendEmail` | Lead capture |

## Configuration

Copy `.env.example` and set what you need (everything degrades gracefully if unset):

- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` — analytics (dormant until set)
- `GHL_WEBHOOK_URL` — forward leads to GoHighLevel (else falls back to Resend)
- `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_TO` — email delivery

Canonical business facts (NAP, phone, offer pricing) live in `src/lib/business.js`.

## Conventions

- Landing/money pages use immediately-visible markup (no scroll-reveal) so CTAs never hide.
- Conversion events fire through `src/lib/analytics.js` `track()` to GA4 + Meta Pixel.
- City pages must stay genuinely unique per city (no thin doorway pages).

© Webhub4u Inc. All rights reserved.
