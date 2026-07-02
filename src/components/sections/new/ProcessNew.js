import styles from "./ProcessNew.module.css";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "A 20-minute call about your business, your customers, and what a win looks like. Free, no pressure.",
  },
  {
    n: "02",
    title: "Design & build",
    desc: "We design, write, and build your site — you review a live preview link and tell us what to change.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Domain, hosting, Google Business Profile, analytics — everything wired up and live, typically within 2–3 weeks.",
  },
  {
    n: "04",
    title: "Grow",
    desc: "Care plans, local SEO, and AI tools keep the site earning. We stay accountable to results, not just launches.",
  },
];

const ProcessNew = () => (
  <section className={`wh ${styles.wrap}`} id="process">
    <div className="wh-inner">
      <p className="wh-eyebrow">How it works</p>
      <h2 className={`wh-display ${styles.heading}`}>
        From first call to <span className="wh-em">first customer.</span>
      </h2>
      <div className={styles.steps}>
        {STEPS.map((s) => (
          <div key={s.n} className={styles.step}>
            <span className={styles.num}>{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessNew;
