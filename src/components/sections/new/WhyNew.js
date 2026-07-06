"use client";
import { useRef } from "react";
import { SplitHeading, RevealText, useStagger } from "./homeMotion";
import styles from "./WhyNew.module.css";

const POINTS = [
  {
    title: "You talk to the person doing the work",
    desc: "No account managers, no handoffs, no offshore mystery team. The person on your discovery call is the person building your site.",
  },
  {
    title: "Fixed prices, published upfront",
    desc: "Our packages and prices are on this page. No 'book a call to find out it costs $8,000.' You know before you reach out.",
  },
  {
    title: "AI-native, not AI-curious",
    desc: "We build with the same AI technology we sell. Most agencies are still figuring this out — it's our core toolkit.",
  },
  {
    title: "Local to the GTA",
    desc: "Based in Brampton, serving Mississauga, Toronto, Vaughan, and everywhere between. We can meet you at your shop.",
  },
];

const WhyNew = () => {
  const pointsRef = useRef(null);
  useStagger(pointsRef, { stagger: 0.09 });
  return (
    <section className={`wh ${styles.wrap}`}>
      <div className="wh-inner">
        <div className={styles.split}>
          <div className={styles.left}>
            <RevealText as="p" className="wh-eyebrow">Why Webhub4U</RevealText>
            <SplitHeading className={`wh-display ${styles.heading}`} delay={80}>
              Big-agency quality.{" "}
              <span className="wh-em">Small-team accountability.</span>
            </SplitHeading>
            <RevealText as="p" className={styles.lede} delay={140}>
              We&apos;re a lean studio by design. That means lower overhead,
              faster answers, and a builder who actually knows your name — not a
              ticket number.
            </RevealText>
          </div>
          <div className={styles.points} ref={pointsRef}>
            {POINTS.map((p) => (
              <div key={p.title} className={styles.point}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNew;
