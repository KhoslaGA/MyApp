import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./TestimonialsNew.module.css";

const initials = (name = "") =>
  name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Renders real client testimonials. Renders nothing until data exists — so
 *  no fabricated proof ever ships. Populate src/data/testimonials.js. */
const TestimonialsNew = () => {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className={`wh ${styles.wrap}`}>
      <div className="wh-inner">
        <p className="wh-eyebrow">Proof</p>
        <h2 className={`wh-display ${styles.heading}`}>
          What GTA businesses <span className="wh-em">are saying.</span>
        </h2>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className={styles.card}>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.by}>
                <span className={styles.avatar}>{initials(t.name)}</span>
                <span className={styles.meta}>
                  <strong>{t.name}</strong>
                  <span className={styles.role}>
                    {t.role}
                    {t.city ? ` · ${t.city}` : ""}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
