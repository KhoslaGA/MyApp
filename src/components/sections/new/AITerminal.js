"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./AITerminal.module.css";

// Realistic looping scenarios: an AI receptionist handling calls.
const SCRIPTS = [
  [
    { who: "caller", text: "Hi, do you have any openings this week?" },
    { who: "ai", text: "We do! I can book you Tuesday at 2pm or Thursday at 10am. Which works?" },
    { who: "caller", text: "Thursday works." },
    { who: "ai", text: "Booked for Thursday 10am ✓ I've texted you a confirmation." },
  ],
  [
    { who: "caller", text: "What's your service area?" },
    { who: "ai", text: "We cover Brampton, Mississauga & the GTA. What's your postal code?" },
    { who: "caller", text: "L6Y — is that covered?" },
    { who: "ai", text: "Yes — you're in our core area. Want me to schedule a visit?" },
  ],
  [
    { who: "caller", text: "Missed your call earlier, sorry!" },
    { who: "ai", text: "No problem 😊 You reached out about a quote — still interested?" },
    { who: "caller", text: "Yes please." },
    { who: "ai", text: "Great. I've sent a link to grab a time that suits you." },
  ],
];

const TYPE_SPEED = 24; // ms per char
const HOLD_AFTER_LINE = 750;
const HOLD_AFTER_SCRIPT = 2200;

const AITerminal = () => {
  const [scriptIdx, setScriptIdx] = useState(0);
  const [lines, setLines] = useState([]); // completed lines
  const [typing, setTyping] = useState({ who: "", text: "" });
  const timers = useRef([]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const script = SCRIPTS[scriptIdx];
    let cancelled = false;
    const clearAll = () => timers.current.forEach(clearTimeout);

    if (reduce) {
      setLines(script);
      setTyping({ who: "", text: "" });
      const t = setTimeout(
        () => setScriptIdx((i) => (i + 1) % SCRIPTS.length),
        4000
      );
      timers.current.push(t);
      return () => {
        cancelled = true;
        clearAll();
      };
    }

    setLines([]);
    setTyping({ who: "", text: "" });

    let delay = 400;
    const schedule = (fn, ms) => {
      const t = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.current.push(t);
    };

    script.forEach((line, li) => {
      // type the line char by char
      for (let c = 1; c <= line.text.length; c++) {
        schedule(
          () => setTyping({ who: line.who, text: line.text.slice(0, c) }),
          delay + c * TYPE_SPEED
        );
      }
      delay += line.text.length * TYPE_SPEED + HOLD_AFTER_LINE;
      // commit the completed line
      schedule(() => {
        setLines((prev) => [...prev, line]);
        setTyping({ who: "", text: "" });
      }, delay);
    });

    // advance to next script
    schedule(() => {
      setScriptIdx((i) => (i + 1) % SCRIPTS.length);
    }, delay + HOLD_AFTER_SCRIPT);

    return () => {
      cancelled = true;
      clearAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptIdx]);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.barLabel}>AI Receptionist · live</span>
        <span className={styles.status}>
          <span className={styles.pulse} /> online
        </span>
      </div>
      <div className={styles.screen}>
        {lines.map((l, i) => (
          <div
            key={i}
            className={`${styles.msg} ${
              l.who === "ai" ? styles.ai : styles.caller
            }`}
          >
            {l.text}
          </div>
        ))}
        {typing.text && (
          <div
            className={`${styles.msg} ${
              typing.who === "ai" ? styles.ai : styles.caller
            }`}
          >
            {typing.text}
            <span className={styles.caret} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AITerminal;
