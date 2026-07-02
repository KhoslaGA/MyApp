import PageShell from "@/components/sections/new/PageShell";
import PageHero from "@/components/sections/new/PageHero";
import CtaNew from "@/components/sections/new/CtaNew";
import Link from "next/link";
import styles from "@/components/sections/new/BlogPage.module.css";

export const metadata = {
  title: "Insights | Webhub4U — Web, SEO & AI for GTA Businesses",
  description:
    "Practical articles on websites, local SEO, and AI tools for small businesses in the Greater Toronto Area.",
};

const POSTS = [
  { t: "Why 'I get all my work from word of mouth' is a trap in 2026", cat: "Strategy", d: "Referrals are great until they dry up. Here's how a website turns one-time referrals into a compounding pipeline." },
  { t: "AI receptionists, explained for people who hate hype", cat: "AI", d: "What they actually do, what they can't, and how to set one up without embarrassing your business." },
  { t: "Local SEO for trades: the 5 things that actually move rankings", cat: "SEO", d: "Skip the jargon. These are the levers that get a plumber or electrician into the map pack." },
];

export default function Blogs() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title={<>Practical, <span className="wh-em">no fluff.</span></>}
        sub="Short, useful articles on getting found, looking credible, and using AI without the buzzwords."
      />
      <section className={`wh ${styles.wrap}`}>
        <div className="wh-inner">
          <div className={styles.grid}>
            {POSTS.map((p) => (
              <article key={p.t} className={styles.card}>
                <span className={styles.cat}>{p.cat}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className={styles.soon}>Coming soon</span>
              </article>
            ))}
          </div>
          <p className={styles.note}>
            We&apos;re publishing our first articles as we launch. Want a topic
            covered? <Link href="/contact">Tell us</Link>.
          </p>
        </div>
      </section>
      <CtaNew />
    </PageShell>
  );
}
