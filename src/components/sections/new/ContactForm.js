"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

const SERVICES = [
  "Website design",
  "AI receptionist",
  "AI chatbot",
  "Local SEO",
  "Automation",
  "Not sure yet",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: SERVICES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className={`wh ${styles.success}`}>
        <p className={styles.successIcon}>✓</p>
        <h3>Thanks, {form.name.split(" ")[0] || "there"}!</h3>
        <p>
          Your message is in. We&apos;ll get back to you within one business
          day — usually much sooner.
        </p>
      </div>
    );
  }

  return (
    <form className={`wh ${styles.form}`} onSubmit={submit}>
      <div className={styles.row}>
        <label>
          Name
          <input required value={form.name} onChange={update("name")} placeholder="Your name" />
        </label>
        <label>
          Business
          <input value={form.business} onChange={update("business")} placeholder="Business name" />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Email
          <input required type="email" value={form.email} onChange={update("email")} placeholder="you@business.com" />
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={update("phone")} placeholder="(555) 555-5555" />
        </label>
      </div>
      <label>
        What can we help with?
        <select value={form.service} onChange={update("service")}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Tell us a bit more
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="What are you looking to build or improve?"
        />
      </label>
      <button
        type="submit"
        className="wh-btn wh-btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className={styles.err}>
          Something went wrong. Please email us directly at webhub4u@gmail.com.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
