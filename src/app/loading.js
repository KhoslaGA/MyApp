import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={`wh ${styles.wrap}`} role="status" aria-label="Loading">
      <span className={styles.spinner} />
    </div>
  );
}
