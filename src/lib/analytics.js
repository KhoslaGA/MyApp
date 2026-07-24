/**
 * Conversion event schema — define once, use everywhere (D1 Sprint 0.5).
 * Safe to call before GA4 / GTM is wired: it no-ops on the server and
 * pushes to dataLayer + gtag only if they exist. When GA4 goes live
 * (NEXT_PUBLIC_GA_ID), these events start flowing with zero code changes.
 *
 * Canonical events:
 *   lead_form_submit · call_click · demo_request · roi_calc_complete · pricing_view
 */
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    /* analytics must never break the UI */
  }
}
