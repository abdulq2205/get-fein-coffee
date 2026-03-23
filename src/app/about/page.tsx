import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="container">
        <header className={styles.pageHeader}>
          <span className={styles.pageLabel}>About Us</span>
          <h1 className={styles.pageTitle}>
            We are obsessive about coffee and honest about everything else.
          </h1>
        </header>
      </div>

      {/* The Origin */}
      <section className={styles.section}>
        <div className={`container ${styles.sectionGrid}`}>
          <div>
            <span className={styles.sectionLabel}>The Origin</span>
            <h2 className={styles.sectionHeading}>Born from a craving for something more intentional.</h2>
            <p className={styles.sectionBody}>
              Get Fein began as a single conviction: that the daily cup of coffee deserved more reverence.
              Not a rushed transaction, but a moment of presence. We started with a small roaster, a long table,
              and a commitment to sourcing ethically from farmers whose names we know.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about-origin.png"
              alt="Cafe interior with neon sign"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* The Practice */}
      <section className={styles.section}>
        <div className={`container ${styles.sectionGrid} ${styles.reversed}`}>
          <div>
            <span className={styles.sectionLabel}>The Practice</span>
            <h2 className={styles.sectionHeading}>Precision is our love language.</h2>
            <p className={styles.sectionBody}>
              Every variable matters: water temperature, grind distribution, bloom time. Our baristas aren&apos;t
              just skilled—they&apos;re obsessive in the best sense. We invest in continuous training not to perform
              expertise, but because quality is a form of respect for the people who grew the beans.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about-practice.png"
              alt="Barista pouring espresso"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* The Community */}
      <section className={styles.section}>
        <div className={`container ${styles.sectionGrid}`}>
          <div>
            <span className={styles.sectionLabel}>The Community</span>
            <h2 className={styles.sectionHeading}>A gathering place for the quietly curious.</h2>
            <p className={styles.sectionBody}>
              Fein is Latin for fine. We chose it because we believe in the value of refinement — not exclusivity.
              This space belongs to anyone who wants to slow down, connect, and discover something worth returning to.
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/images/about-community.png"
              alt="Cafe with lush green plants"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesLabel}>What We Stand For</div>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>Single-origin sourcing</div>
            <div className={styles.valueItem}>Direct trade relationships</div>
            <div className={styles.valueItem}>Zero waste operations</div>
            <div className={styles.valueItem}>Community first</div>
          </div>
        </div>
      </section>
    </>
  );
}
