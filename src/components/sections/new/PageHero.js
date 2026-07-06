import ConstellationBg from "./ConstellationBg";
import styles from "./PageHero.module.css";

const PageHero = ({ eyebrow, title, sub }) => (
  <section className={`wh ${styles.hero}`}>
    <ConstellationBg />
    <div className={styles.glow} aria-hidden="true" />
    <div className={`wh-inner ${styles.inner}`}>
      {eyebrow && <p className={`wh-eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
      <h1 className={`wh-display ${styles.title}`}>{title}</h1>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  </section>
);

export default PageHero;
