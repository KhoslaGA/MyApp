export default function sitemap() {
  const base = "https://webhub4u.com";
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/ai-receptionist", priority: 0.9, changeFrequency: "weekly" },
    { path: "/missed-call-text-back", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/roi", priority: 0.6, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blogs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
