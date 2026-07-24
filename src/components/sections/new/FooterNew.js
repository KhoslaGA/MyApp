import Link from "next/link";
import Image from "next/image";
import styles from "./FooterNew.module.css";

const CITIES = [
  "Brampton",
  "Mississauga",
  "Toronto",
  "Vaughan",
  "Markham",
  "Oakville",
  "Milton",
  "Burlington",
];

const FooterNew = () => (
  <footer className={`wh ${styles.wrap}`}>
    <div className="wh-inner">
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/logo-nav-t.png"
            alt="Webhub4U"
            width={190}
            height={93}
            className={styles.logoImg}
          />
          <p className={styles.blurb}>
            Websites, local SEO, and AI-powered tools for businesses across
            the Greater Toronto Area. Based in Brampton, Ontario.
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Services</p>
          <Link href="/#services">Web design</Link>
          <Link href="/ai-receptionist">AI receptionist</Link>
          <Link href="/missed-call-text-back">Missed-call text-back</Link>
          <Link href="/#ai">AI chatbots</Link>
          <Link href="/#services">Local SEO</Link>
          <Link href="/#pricing">Pricing</Link>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Company</p>
          <Link href="/about">About</Link>
          <Link href="/projects">Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
        <div className={styles.col}>
          <p className={styles.colTitle}>Get in touch</p>
          <a href="mailto:webhub4u@gmail.com">webhub4u@gmail.com</a>
          <Link href="/contact">Book a free consult</Link>
        </div>
      </div>
      <div className={styles.cities}>
        <p className={styles.colTitle}>Serving the GTA</p>
        <p className={styles.cityList}>{CITIES.join(" · ")}</p>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Webhub4U Inc. All rights reserved.
        </p>
        <p>Made in Brampton, Ontario 🇨🇦</p>
      </div>
    </div>
  </footer>
);

export default FooterNew;
