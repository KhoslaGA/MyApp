import PageShell from "@/components/sections/new/PageShell";
import PageHero from "@/components/sections/new/PageHero";
import CtaNew from "@/components/sections/new/CtaNew";
import RoiCalculator from "@/components/sections/new/RoiCalculator";
import Link from "next/link";
import styles from "@/components/sections/new/RoiPage.module.css";

export const metadata = {
  title: "Missed-Call ROI Calculator | Webhub4U",
  description:
    "See what missed calls are costing your business each month — and what an AI receptionist would recover. Free, instant, no email required.",
  alternates: { canonical: "/roi" },
};

export default function RoiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="ROI Calculator"
        title={<>What are missed calls <span className="wh-em">actually costing you?</span></>}
        sub="Slide in your numbers. We'll show you the revenue walking out the door every month — and what it takes to catch it."
      />
      <section className={`wh ${styles.wrap}`}>
        <div className="wh-inner">
          <RoiCalculator monthlyCost={397} />
          <p className={styles.note}>
            Rough math, honest assumptions — a starting point for a real
            conversation, not a quote.{" "}
            <Link href="/ai-receptionist">See how the AI receptionist works →</Link>
          </p>
        </div>
      </section>
      <CtaNew />
    </PageShell>
  );
}
