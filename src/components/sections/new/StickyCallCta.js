"use client";
import { BUSINESS, telHref } from "@/lib/business";
import { track } from "@/lib/analytics";
import styles from "./StickyCallCta.module.css";

/**
 * Mobile-only sticky CTA. Prefers the Vapi demo line ("hear it live"), falls
 * back to the business line ("call us"), and finally to the demo form — so we
 * never ship a dead/fake number and mobile users always get a tap-to-call.
 */
const StickyCallCta = () => {
  const demo = telHref(BUSINESS.demoPhone);
  const main = telHref(BUSINESS.phone);
  const href = demo || main;
  const label = demo
    ? "📞 Hear it live — call the demo line"
    : `📞 Call us — ${BUSINESS.phone}`;
  return (
    <div className={`wh ${styles.bar}`}>
      {href ? (
        <a
          href={href}
          className={`wh-btn wh-btn--primary ${styles.btn}`}
          onClick={() =>
            track("call_click", {
              source: demo
                ? "ai-receptionist-sticky-demo"
                : "ai-receptionist-sticky-call",
            })
          }
        >
          {label}
        </a>
      ) : (
        <a href="#demo" className={`wh-btn wh-btn--primary ${styles.btn}`}>
          Get your free live demo
        </a>
      )}
    </div>
  );
};

export default StickyCallCta;
