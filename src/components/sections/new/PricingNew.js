import Link from "next/link";
import styles from "./PricingNew.module.css";

const TIERS = [
  {
    name: "Launch",
    price: "$997",
    unit: "one-time",
    blurb: "For new businesses that need a credible online presence, fast.",
    features: [
      "3-page website (Home, Services, Contact)",
      "Mobile-first, fast-loading design",
      "Contact form + click-to-call",
      "Google Business Profile setup",
      "Live in 2 weeks",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,497",
    unit: "one-time",
    blurb: "Our most popular package — a site built to rank and convert.",
    features: [
      "5-page website with copywriting included",
      "Local SEO foundation + on-page optimization",
      "Online booking or quote-request integration",
      "Review & testimonial section",
      "30 days of post-launch tweaks",
    ],
    featured: true,
  },
  {
    name: "Authority",
    price: "$2,497",
    unit: "one-time",
    blurb: "Dominate your area with AI working alongside your website.",
    features: [
      "8+ pages incl. city landing pages for local SEO",
      "AI chat assistant trained on your business",
      "Missed-call text-back setup",
      "Review automation",
      "90 days of priority support",
    ],
    featured: false,
  },
];

const ADDONS = [
  { name: "AI Receptionist", price: "from $199/mo" },
  { name: "AI Chat Assistant", price: "from $99/mo" },
  { name: "Care Plan (updates, backups, edits)", price: "from $99/mo" },
  { name: "Local SEO retainer", price: "from $299/mo" },
];

const PricingNew = () => (
  <section className={`wh ${styles.wrap}`} id="pricing">
    <div className="wh-inner">
      <p className="wh-eyebrow">Transparent pricing</p>
      <h2 className={`wh-display ${styles.heading}`}>
        Clear packages. <span className="wh-em">No mystery quotes.</span>
      </h2>
      <div className={styles.tiers}>
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={`${styles.tier} ${t.featured ? styles.featured : ""}`}
          >
            {t.featured && <span className={styles.badge}>Most popular</span>}
            <h3>{t.name}</h3>
            <p className={styles.price}>
              {t.price} <span>{t.unit} CAD</span>
            </p>
            <p className={styles.blurb}>{t.blurb}</p>
            <ul>
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`wh-btn ${
                t.featured ? "wh-btn--primary" : styles.tierBtn
              }`}
            >
              Start with {t.name}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.addons}>
        <p className={styles.addonsTitle}>Monthly add-ons</p>
        <ul>
          {ADDONS.map((a) => (
            <li key={a.name}>
              <span>{a.name}</span>
              <span className={styles.addonPrice}>{a.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PricingNew;
