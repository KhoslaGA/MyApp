"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import styles from "./RoiCalculator.module.css";

const WEEKS_PER_MONTH = 4.33;

const money = (n) =>
  "$" + Math.round(n).toLocaleString("en-CA", { maximumFractionDigits: 0 });

/**
 * ROI calculator for the missed-call / AI-receptionist offer.
 * monthlyCost = price of the service (default $397/mo — adjust to the live offer).
 * Fires `roi_calc_complete` (debounced) so it lands as a GA4 conversion event.
 */
const RoiCalculator = ({ monthlyCost = 397, compact = false }) => {
  const [jobValue, setJobValue] = useState(500);
  const [callsMissed, setCallsMissed] = useState(10);
  const [closeRate, setCloseRate] = useState(40);

  const { monthlyMissed, jobsWon, revenueLost, net } = useMemo(() => {
    const monthlyMissed = callsMissed * WEEKS_PER_MONTH;
    const jobsWon = monthlyMissed * (closeRate / 100);
    const revenueLost = jobsWon * jobValue;
    return {
      monthlyMissed,
      jobsWon,
      revenueLost,
      net: revenueLost - monthlyCost,
    };
  }, [jobValue, callsMissed, closeRate, monthlyCost]);

  // Fire the conversion event once inputs settle (debounced).
  const fired = useRef(false);
  useEffect(() => {
    const t = setTimeout(() => {
      track("roi_calc_complete", {
        avg_job_value: jobValue,
        calls_missed_per_week: callsMissed,
        close_rate: closeRate,
        revenue_lost_monthly: Math.round(revenueLost),
        first_interaction: !fired.current,
      });
      fired.current = true;
    }, 900);
    return () => clearTimeout(t);
  }, [jobValue, callsMissed, closeRate, revenueLost]);

  return (
    <div className={`${styles.calc} ${compact ? styles.compact : ""}`}>
      <div className={styles.controls}>
        <Control
          label="Average job value"
          value={money(jobValue)}
          min={100}
          max={5000}
          step={50}
          raw={jobValue}
          onChange={setJobValue}
        />
        <Control
          label="Calls missed per week"
          value={String(callsMissed)}
          min={1}
          max={50}
          step={1}
          raw={callsMissed}
          onChange={setCallsMissed}
        />
        <Control
          label="Your close rate"
          value={closeRate + "%"}
          min={5}
          max={90}
          step={5}
          raw={closeRate}
          onChange={setCloseRate}
        />
      </div>

      <div className={styles.result}>
        <p className={styles.resultLabel}>You&apos;re likely losing</p>
        <p className={styles.big}>{money(revenueLost)}<span>/mo</span></p>
        <p className={styles.detail}>
          ~{Math.round(monthlyMissed)} missed calls a month × {closeRate}% close
          = <strong>{jobsWon.toFixed(1)} jobs</strong> slipping away.
        </p>
        <div className={styles.divider} />
        <div className={styles.netRow}>
          <div>
            <p className={styles.netLabel}>Recover it for</p>
            <p className={styles.netCost}>{money(monthlyCost)}/mo</p>
          </div>
          <div className={styles.netArrow}>→</div>
          <div>
            <p className={styles.netLabel}>Net back in your pocket</p>
            <p className={styles.netGain}>
              {net > 0 ? money(net) + "/mo" : "—"}
            </p>
          </div>
        </div>
        {!compact && (
          <Link href="/contact" className={`wh-btn wh-btn--primary ${styles.cta}`}>
            Stop missing these calls
          </Link>
        )}
      </div>
    </div>
  );
};

function Control({ label, value, min, max, step, raw, onChange }) {
  const pct = ((raw - min) / (max - min)) * 100;
  return (
    <div className={styles.control}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.val}>{value}</span>
      </div>
      <input
        type="range"
        className={styles.range}
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(90deg, var(--wh-accent) ${pct}%, var(--wh-border) ${pct}%)`,
        }}
      />
    </div>
  );
}

export default RoiCalculator;
