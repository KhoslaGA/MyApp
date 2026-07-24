"use client";
import { BUSINESS, telHref } from "@/lib/business";
import { track } from "@/lib/analytics";
import styles from "./StickyCallCta.module.css";

/**
 * Mobile-only sticky CTA. If the Vapi demo line is configured it becomes a
 * tel: link (the page IS the demo); otherwise it scrolls to the demo form so
 * we never ship a dead/fake phone number.
 */
const StickyCallCta = () => {
  const tel = telHref(BUSINESS.demoPhone);
  return (
    <div className={`wh ${styles.bar}`}>
      {tel ? (
        <a
          href={tel}
          className={`wh-btn wh-btn--primary ${styles.btn}`}
          onClick={() =>
            track("call_click", { source: "ai-receptionist-sticky" })
          }
        >
          📞 Hear it live — call the demo line
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
