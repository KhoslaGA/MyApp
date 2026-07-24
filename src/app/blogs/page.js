import PageShell from "@/components/sections/new/PageShell";
import PageHero from "@/components/sections/new/PageHero";
import CtaNew from "@/components/sections/new/CtaNew";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import styles from "@/components/sections/new/BlogPage.module.css";

export const metadata = {
  title: "Insights — Web, SEO & AI for GTA Businesses | Webhub4U",
  description:
    "Practical, no-fluff articles on websites, local SEO, and AI tools for small businesses in the Greater Toronto Area.",
  alternates: { canonical: "/blogs" },
};

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function Blogs() {
  const posts = getAllPosts();
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical, <span className="wh-em">no fluff.</span>
          </>
        }
        sub="Short, useful articles on getting found, looking credible, and using AI without the buzzwords."
      />
      <section className={`wh ${styles.wrap}`}>
        <div className="wh-inner">
          {posts.length ? (
            <div className={styles.grid}>
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className={styles.card}
                >
                  <span className={styles.cat}>{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <span className={styles.meta}>{fmtDate(p.date)} · Read →</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.note}>
              We&apos;re publishing our first articles now — check back soon, or{" "}
              <Link href="/contact">suggest a topic</Link>.
            </p>
          )}
        </div>
      </section>
      <CtaNew />
    </PageShell>
  );
}
