import styles from "./page.module.css";

const highlights = [
  "Brand strategy + positioning",
  "High-converting landing pages",
  "SEO + performance optimization",
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* Hero section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        {/* Copy column */}
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Web Agency</p>
          <h1 id="hero-title" className={styles.title}>
            Launch a modern website that turns visitors into customers.
          </h1>
          <p className={styles.subtitle}>
            We design, build, and optimize digital experiences for ambitious
            teams. From discovery to deployment, our specialists deliver fast,
            accessible, and conversion-focused sites.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#contact">
              Book a strategy call
            </a>
            <a className={styles.secondaryButton} href="#work">
              View recent work
            </a>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                <span aria-hidden="true" className={styles.checkmark}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual column */}
        <div className={styles.heroCard} role="presentation">
          <div className={styles.cardHeader}>
            <p className={styles.cardLabel}>Live performance snapshot</p>
            <p className={styles.cardTitle}>+142% conversions</p>
          </div>

          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Avg. load time</span>
              <strong className={styles.metricValue}>0.9s</strong>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Qualified leads</span>
              <strong className={styles.metricValue}>1.8k</strong>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>NPS score</span>
              <strong className={styles.metricValue}>62</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
