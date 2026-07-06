import Link from "next/link";
import LogoGlobe from "./LogoGlobe";
import styles from "./CtaNew.module.css";

const CtaNew = () => (
  <section className={`wh ${styles.wrap}`}>
    <div className={`wh-inner ${styles.inner}`}>
      <div className={styles.globeWrap}>
        <LogoGlobe size={420} />
      </div>
      <h2 className={`wh-display ${styles.heading}`}>
        Ready to look like the{" "}
        <span className="wh-em">business you actually are?</span>
      </h2>
      <p className={styles.sub}>
        Book a free 20-minute call. We&apos;ll look at your current online
        presence together and tell you exactly what we&apos;d do — even if you
        don&apos;t hire us.
      </p>
      <div className={styles.ctas}>
        <Link href="/contact" className="wh-btn wh-btn--primary">
          Book your free consult
        </Link>
        <a href="mailto:webhub4u@gmail.com" className="wh-btn wh-btn--ghost-dark">
          webhub4u@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default CtaNew;
