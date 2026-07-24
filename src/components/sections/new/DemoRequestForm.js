"use client";
import { useState } from "react";
import { track } from "@/lib/analytics";
import styles from "./DemoRequestForm.module.css";

const VERTICALS = [
  "Trades / home services",
  "Clinic / health",
  "Professional services",
  "Restaurant / hospitality",
  "Retail / shop",
  "Other",
];

const DemoRequestForm = ({ source = "webhub4u.com/ai-receptionist" }) => {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    vertical: VERTICALS[0],
  });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      if (res.ok) {
        setStatus("ok");
        track("demo_request", { vertical: form.vertical, source });
        track("lead_form_submit", { form: "demo_request", source });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className={`wh ${styles.success}`}>
        <p className={styles.successIcon}>✓</p>
        <h3>You&apos;re in, {form.name.split(" ")[0] || "there"}.</h3>
        <p>
          We&apos;ll call {form.phone || "you"} shortly to walk you through a
          live demo — you&apos;ll hear exactly what your callers would hear.
        </p>
      </div>
    );
  }

  return (
    <form className={`wh ${styles.form}`} onSubmit={submit}>
      <div className={styles.row}>
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </label>
        <label>
          Business
          <input
            value={form.business}
            onChange={update("business")}
            placeholder="Business name"
          />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(555) 555-5555"
          />
        </label>
        <label>
          Your business is…
          <select value={form.vertical} onChange={update("vertical")}>
            {VERTICALS.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="wh-btn wh-btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Get my live demo"}
      </button>
      {status === "error" && (
        <p className={styles.err}>
          Something went wrong. Please email us at webhub4u@gmail.com.
        </p>
      )}
    </form>
  );
};

export default DemoRequestForm;
