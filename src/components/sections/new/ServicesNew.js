"use client";
import { useRef } from "react";
import Link from "next/link";
import useTilt from "./useTilt";
import Reveal from "./Reveal";
import styles from "./ServicesNew.module.css";

const SERVICES = [
  { title: "Web Design & Development", desc: "Fast, modern, mobile-first websites built to convert visitors into calls, bookings, and sales.", tag: "Core" },
  { title: "AI Receptionist", desc: "Answers your phone after hours, texts back missed calls, and books appointments while you work.", tag: "AI" },
  { title: "AI Chatbots", desc: "A website assistant trained on your business that answers questions and captures leads 24/7.", tag: "AI" },
  { title: "Local SEO", desc: "Google Business Profile optimization, city pages, and reviews strategy that puts you on the map.", tag: "Growth" },
  { title: "Business Automation", desc: "Quotes, invoices, follow-ups, and CRM updates that run themselves — powered by AI workflows.", tag: "AI" },
  { title: "Branding & Identity", desc: "Logos, colors, and messaging that make a small business look established and trustworthy.", tag: "Core" },
  { title: "E-Commerce", desc: "Online stores on Shopify or custom builds — products, payments, and shipping done right.", tag: "Core" },
  { title: "Care Plans & Hosting", desc: "Updates, backups, security, and small changes handled monthly, so your site never goes stale.", tag: "Growth" },
];

const ServicesNew = () => {
  const gridRef = useRef(null);
  useTilt(gridRef, `.${styles.card}`);
  return (
    <section className={`wh ${styles.wrap}`} id="services">
      <div className="wh-inner">
        <Reveal>
          <p className="wh-eyebrow">What we do</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`wh-display ${styles.heading}`}>
            Everything your business needs to{" "}
            <span className="wh-em">win online.</span>
          </h2>
        </Reveal>
        <div className={styles.grid} ref={gridRef}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 70} className={styles.card}>
              <span className={`${styles.tag} ${s.tag === "AI" ? styles.tagAi : ""}`}>
                {s.tag}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.foot}>
          <p>Not sure what you need? Start with a free 20-minute consult.</p>
          <Link href="/contact" className="wh-btn wh-btn--primary">
            Get a free consult
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
