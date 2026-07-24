import Link from "next/link";
import PageShell from "@/components/sections/new/PageShell";
import PageHero from "@/components/sections/new/PageHero";
import CtaNew from "@/components/sections/new/CtaNew";
import JsonLd from "@/components/seo/JsonLd";
import { LOCATIONS } from "@/data/locations";
import { localBusinessLd, breadcrumbLd } from "@/lib/schema";
import { BUSINESS } from "@/lib/business";
import styles from "@/components/sections/new/LocationPage.module.css";

export const metadata = {
  title: "Areas We Serve — Web Design & AI Across the GTA | Webhub4U",
  description:
    "Webhub4U builds websites, local SEO, and AI receptionists for businesses across the Greater Toronto Area — Brampton, Mississauga, Toronto, Vaughan, and beyond.",
  alternates: { canonical: "/locations" },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: LOCATIONS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Web design & AI in ${c.name}`,
    url: `${BUSINESS.url}/locations/${c.slug}`,
  })),
};

export default function LocationsHub() {
  return (
    <PageShell>
      <JsonLd data={localBusinessLd()} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <JsonLd data={itemListLd} />

      <PageHero
        eyebrow="Areas we serve"
        title={
          <>
            Local to the <span className="wh-em">whole GTA.</span>
          </>
        }
        sub="We're based in Brampton and build websites, local SEO, and AI tools for businesses right across the Greater Toronto Area. Find your city."
      />

      <section className={`wh ${styles.hub}`}>
        <div className="wh-inner">
          <div className={styles.hubGrid}>
            {LOCATIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className={styles.cityCard}
              >
                <h2>{c.name}</h2>
                <p>{c.neighbourhoods.slice(0, 3).join(" · ")}</p>
                <span className={styles.cityCta}>
                  Web design &amp; AI in {c.name} →
                </span>
              </Link>
            ))}
          </div>
          <p className={styles.hubNote}>
            Don&apos;t see your city? We serve the whole GTA — {" "}
            <Link href="/contact">get in touch</Link> and we&apos;ll help.
          </p>
        </div>
      </section>

      <CtaNew />
    </PageShell>
  );
}
