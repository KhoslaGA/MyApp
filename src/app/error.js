"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section
      className="wh"
      style={{
        background: "var(--wh-bg-dark)",
        color: "var(--wh-text-inv)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 0",
      }}
    >
      <div className="wh-inner" style={{ textAlign: "center" }}>
        <p
          className="wh-eyebrow"
          style={{ color: "var(--wh-text-inv-muted)" }}
        >
          Something broke
        </p>
        <h1
          className="wh-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            color: "var(--wh-text-inv)",
            margin: "16px 0",
          }}
        >
          That didn&apos;t go as <span className="wh-em">planned.</span>
        </h1>
        <p
          style={{
            color: "var(--wh-text-inv-muted)",
            maxWidth: "46ch",
            margin: "0 auto 30px",
            lineHeight: 1.7,
          }}
        >
          An unexpected error occurred. You can try again, or head back home
          and we&apos;ll get you sorted.
        </p>
        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            className="wh-btn wh-btn--primary"
          >
            Try again
          </button>
          <Link href="/" className="wh-btn wh-btn--ghost-dark">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
