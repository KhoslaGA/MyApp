import fs from "fs";
import path from "path";
import { parseFrontmatter, markdownToHtml } from "./markdown";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

const readingTime = (text) =>
  Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

/** All posts (metadata only), newest first. Server/build-time only. */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
      const { data } = parseFrontmatter(raw);
      return { slug: f.replace(/\.md$/, ""), ...data };
    })
    .sort((a, b) => (String(a.date) < String(b.date) ? 1 : -1));
}

export function getPostSlugs() {
  return getAllPosts().map((p) => p.slug);
}

/** A single post with rendered HTML + reading time. */
export function getPost(slug) {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    ...data,
    readingTime: readingTime(content),
    html: markdownToHtml(content),
  };
}
