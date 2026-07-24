/**
 * Canonical business facts — single source of truth for NAP, contact, and
 * the offer stack. The address/phone here MUST match the Google Business
 * Profile and every citation exactly (D3). Fill the TODOs before launch.
 *
 * Anything left empty degrades gracefully in the UI (e.g. an unset demoPhone
 * turns the "call our demo line" CTA into a "book a demo" link instead of
 * shipping a fake tel: number).
 */
export const BUSINESS = {
  name: "Webhub4U",
  legalName: "Webhub4U Inc.",
  email: "webhub4u@gmail.com",
  phone: "", // TODO: main business phone — must match GBP + citations
  demoPhone: "", // TODO: Vapi AI-receptionist demo line (the page IS the demo)
  city: "Brampton",
  region: "ON",
  country: "CA",
  areaServed: "Greater Toronto Area",
  url: "https://webhub4u.com",
};

/** Offer pricing (D1). Adjust to the live offer stack. */
export const OFFER = {
  aiReceptionist: { setup: 997, monthly: 397 },
  missedCallTextBack: { monthly: 197 },
};

/** tel: href from a display number, or null if not set. */
export const telHref = (num) =>
  num ? "tel:" + num.replace(/[^\d+]/g, "") : null;
