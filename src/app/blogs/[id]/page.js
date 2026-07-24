import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/sections/new/PageShell";
import CtaNew from "@/components/sections/new/CtaNew";
import JsonLd from "@/components/seo/JsonLd";
import { getPost, getPostSlugs } from "@/lib/blog";
import { breadcrumbLd } from "@/lib/schema";
import { BUSINESS, AUTHOR } from "@/lib/business";
import styles from "@/components/sections/new/BlogPost.module.css";

export function generateStaticParams() {
  return getPostSlugs().map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.id);
  if (!post) return {};
  return {
    title: `${post.title} | Webhub4U`,
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${BUSINESS.url}/blogs/${post.slug}`,
    },
  };
}

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const initials = (name = "") =>
  name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function BlogPost({ params }) {
  const post = getPost(params.id);
  if (!post) notFound();

  const authorIsTeam = /team/i.test(AUTHOR.name);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": authorIsTeam ? "Organization" : "Person",
      name: AUTHOR.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    mainEntityOfPage: `${BUSINESS.url}/blogs/${post.slug}`,
  };

  return (
    <PageShell>
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blogs" },
          { name: post.title, path: `/blogs/${post.slug}` },
        ])}
      />

      <article className={`wh ${styles.article}`}>
        <header className={styles.head}>
          <div className={`wh-inner ${styles.headInner}`}>
            <nav className={styles.crumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blogs">Insights</Link>
            </nav>
            {post.category && <span className={styles.cat}>{post.category}</span>}
            <h1 className={`wh-display ${styles.title}`}>{post.title}</h1>
            {post.description && <p className={styles.dek}>{post.description}</p>}
            <div className={styles.byline}>
              <span className={styles.avatar}>{initials(AUTHOR.name)}</span>
              <span className={styles.bylineMeta}>
                <strong>{AUTHOR.name}</strong>
                <span>
                  {fmtDate(post.date)} · {post.readingTime} min read
                </span>
              </span>
            </div>
          </div>
        </header>

        <div className={`wh-inner ${styles.body}`}>
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <aside className={styles.authorBox}>
            <span className={styles.avatarLg}>{initials(AUTHOR.name)}</span>
            <div>
              <p className={styles.authorName}>{AUTHOR.name}</p>
              <p className={styles.authorRole}>{AUTHOR.role}</p>
              <p className={styles.authorBio}>{AUTHOR.bio}</p>
            </div>
          </aside>

          <p className={styles.back}>
            <Link href="/blogs">← All insights</Link>
          </p>
        </div>
      </article>

      <CtaNew />
    </PageShell>
  );
}
