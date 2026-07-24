"use client";
import { useState } from "react";
import styles from "./FaqBlock.module.css";

/** Reusable FAQ accordion. Pass `items: [{ q, a }]`. */
const FaqBlock = ({ items, defaultOpen = 0 }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.list}>
      {items.map((f, i) => (
        <div key={f.q} className={styles.item}>
          <button
            className={styles.q}
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {f.q}
            <span className={styles.icon}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className={styles.a}>{f.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default FaqBlock;
