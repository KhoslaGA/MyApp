import { getAllPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business";

export const dynamic = "force-static";

const escapeXml = (s = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const site = BUSINESS.url;
  const posts = getAllPosts();

  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${site}/blogs/${p.slug}</link>
      <guid isPermaLink="true">${site}/blogs/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.description || "")}</description>${
        p.category ? `\n      <category>${escapeXml(p.category)}</category>` : ""
      }
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Webhub4U Insights</title>
    <link>${site}/blogs</link>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical articles on websites, local SEO, and AI tools for GTA businesses.</description>
    <language>en-CA</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
