export default function sitemap() {
  const base = "https://webhub4u.com";
  const routes = ["", "/services", "/projects", "/about", "/contact", "/faq", "/blogs", "/privacy-policy"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
