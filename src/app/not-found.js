import PageShell from "@/components/sections/new/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Page not found | Webhub4U",
};

export default function NotFound() {
  return (
    <PageShell>
      <section
        className="wh"
        style={{
          background: "var(--wh-bg-dark)",
          color: "var(--wh-text-inv)",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          padding: "140px 0",
        }}
      >
        <div className="wh-inner" style={{ textAlign: "center" }}>
          <p className="wh-display wh-em" style={{ fontSize: "5rem", margin: 0 }}>
            404
          </p>
          <h1
            className="wh-display"
            style={{
              fontSize: "clamp(1.8rem,4vw,3rem)",
              color: "var(--wh-text-inv)",
              margin: "10px 0 16px",
            }}
          >
            This page wandered off.
          </h1>
          <p
            style={{
              color: "var(--wh-text-inv-muted)",
              maxWidth: "44ch",
              margin: "0 auto 30px",
              lineHeight: 1.7,
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or moved. Let&apos;s
            get you back on track.
          </p>
          <Link href="/" className="wh-btn wh-btn--primary">
            Back to home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
