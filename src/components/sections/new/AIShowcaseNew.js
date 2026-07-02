import Link from "next/link";
import styles from "./AIShowcaseNew.module.css";

const ITEMS = [
  {
    stat: "Never miss a call",
    title: "AI Receptionist",
    desc: "Most small businesses lose jobs to voicemail. Your AI receptionist answers after-hours calls, texts back missed ones, and books the appointment before your competitor picks up.",
  },
  {
    stat: "24/7 on your website",
    title: "AI Chat Assistant",
    desc: "Trained on your services, pricing, and service area. It answers the questions visitors actually ask and turns them into booked leads while you sleep.",
  },
  {
    stat: "Hours back every week",
    title: "Workflow Automation",
    desc: "Quotes, invoices, review requests, and follow-ups that send themselves. We wire your tools together so the busywork runs without you.",
  },
];

const AIShowcaseNew = () => (
  <section className={`wh ${styles.wrap}`} id="ai">
    <div className="wh-inner">
      <p className={`wh-eyebrow ${styles.eyebrow}`}>The AI advantage</p>
      <h2 className={`wh-display ${styles.heading}`}>
        Your website is step one.{" "}
        <span className="wh-em">AI makes it work overtime.</span>
      </h2>
      <p className={styles.lede}>
        We build AI tools on the same technology powering the world&apos;s
        leading assistants — set up for your business, your services, and your
        customers. No hype, no black box: practical tools that answer, book,
        and follow up.
      </p>
      <div className={styles.cards}>
        {ITEMS.map((it) => (
          <div key={it.title} className={styles.card}>
            <span className={styles.stat}>{it.stat}</span>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <Link href="/contact" className="wh-btn wh-btn--primary">
          See a live demo
        </Link>
        <span className={styles.ctaNote}>
          We&apos;ll show you an AI receptionist answering a real call.
        </span>
      </div>
    </div>
  </section>
);

export default AIShowcaseNew;
