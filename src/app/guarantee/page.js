import PageShell from "@/components/sections/new/PageShell";
import PageHero from "@/components/sections/new/PageHero";
import CtaNew from "@/components/sections/new/CtaNew";
import Link from "next/link";
import { OFFER } from "@/lib/business";
import styles from "@/components/sections/new/GuaranteePage.module.css";

export const metadata = {
  title: "Our Guarantee — First Month Free if It Misses | Webhub4U",
  description:
    "Our AI receptionist promise: if it misses in your first month, that month is free. Month-to-month, cancel anytime. We only win when you stop losing calls.",
  alternates: { canonical: "/guarantee" },
};

const POINTS = [
  {
    t: "First month free if it misses",
    d: "If your AI receptionist fails to answer or capture a call it should have handled in your first 30 days, that month's service fee is on us — no arguing, no fine print.",
  },
  {
    t: "No long-term contract",
    d: "Everything is month-to-month. Stay because it's working, not because you're locked in. Cancel any time with a simple email.",
  },
  {
    t: "You review it before it goes live",
    d: "Nothing the assistant is allowed to say reaches a real caller until you've approved it. You're never surprised by what your customers hear.",
  },
  {
    t: "You keep everything",
    d: "Your number, your call recordings and transcripts, your data — all yours. If you ever leave, you leave with it.",
  },
];

export default function Guarantee() {
  const { setup, monthly } = OFFER.aiReceptionist;
  return (
    <PageShell>
      <PageHero
        eyebrow="Our promise"
        title={
          <>
            If it misses, <span className="wh-em">you don&apos;t pay for the month.</span>
          </>
        }
        sub="Handing your phones to someone new is a leap of faith. So we take the risk off your side of the table — here's exactly what we stand behind."
      />

      <section className={`wh ${styles.wrap}`}>
        <div className="wh-inner">
          <div className={styles.grid}>
            {POINTS.map((p, i) => (
              <div key={p.t} className={styles.card}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h2>{p.t}</h2>
                <p>{p.d}</p>
              </div>
            ))}
          </div>

          <div className={styles.why}>
            <p className="wh-eyebrow">Why we can offer this</p>
            <h2 className={`wh-display ${styles.whyH}`}>
              We only win when you <span className="wh-em">stop losing calls.</span>
            </h2>
            <p className={styles.whyP}>
              The AI receptionist is ${setup} to set up and ${monthly} a month —
              and it pays for itself the first time it catches a job you&apos;d
              otherwise have lost to voicemail. We&apos;re confident enough in
              that math to put our own fee on the line. If it doesn&apos;t
              deliver, we haven&apos;t earned it.
            </p>
            <Link href="/ai-receptionist#demo" className="wh-btn wh-btn--primary">
              Hear it live
            </Link>
          </div>
        </div>
      </section>

      <CtaNew />
    </PageShell>
  );
}
