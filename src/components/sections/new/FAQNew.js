"use client";
import { useState } from "react";
import styles from "./FAQNew.module.css";

const FAQS = [
  {
    q: "How long does a website take?",
    a: "Launch sites go live in about 2 weeks. Growth and Authority packages typically take 3–4 weeks, mostly depending on how quickly we get your content and feedback. We keep things moving with a simple checklist so nothing stalls.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — fully. The code, the domain, the content: all yours. We host it for you if you want the convenience, but you're never locked in and can take it anywhere.",
  },
  {
    q: "What is an AI receptionist, exactly?",
    a: "It's an AI-powered assistant that answers your business phone when you can't — after hours, on the job site, or when you're with a customer. It answers common questions, takes messages, texts back missed calls, and can book appointments straight into your calendar.",
  },
  {
    q: "Will AI say something wrong to my customers?",
    a: "We set strict guardrails: the assistant only answers from information you approve, and anything it can't handle gets passed to you as a message. You review everything it's allowed to say before it goes live.",
  },
  {
    q: "I already have a website. Can you just add the AI tools?",
    a: "Absolutely. The AI receptionist, chatbot, and automations all work with existing websites — any platform.",
  },
  {
    q: "What do the monthly plans cover?",
    a: "Care plans cover hosting, security updates, backups, and small content changes each month. AI plans cover the assistant's phone number, usage, monitoring, and tuning. Cancel anytime — no long-term contracts.",
  },
];

const FAQNew = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className={`wh ${styles.wrap}`} id="faq">
      <div className="wh-inner">
        <p className="wh-eyebrow">Questions</p>
        <h2 className={`wh-display ${styles.heading}`}>
          Asked <span className="wh-em">often.</span>
        </h2>
        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <div key={f.q} className={styles.item}>
              <button
                className={styles.q}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className={styles.icon}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className={styles.a}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQNew;
