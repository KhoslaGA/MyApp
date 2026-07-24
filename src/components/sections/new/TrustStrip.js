import styles from "./TrustStrip.module.css";

/** Factual credibility bar — solo is a feature for local (D1 Sprint 3). */
const POINTS = [
  "Brampton-based",
  "Serving the GTA",
  "Incorporated Canadian company",
  "You talk to the person who builds it",
];

const TrustStrip = () => (
  <section className={`wh ${styles.strip}`}>
    <div className={`wh-inner ${styles.inner}`}>
      {POINTS.map((p) => (
        <span key={p} className={styles.point}>
          <span className={styles.tick} aria-hidden="true">
            ✓
          </span>
          {p}
        </span>
      ))}
    </div>
  </section>
);

export default TrustStrip;
