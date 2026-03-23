import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero.png"
            alt="Get Fein Coffee"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div>
            <div className={styles.heroTextGet}>GET</div>
          </div>
          <div className={styles.heroMiddle}>
            <div className={styles.heroProposition}>
              <p>Specialty coffee, consciously sourced. Brewed with precision. Served with care.</p>
              <Link href="/menu" className={styles.heroCta}>Explore the Menu ↘</Link>
            </div>
          </div>
          <div>
            <div className={styles.heroTextFein}>FEIN</div>
          </div>
          <div className={styles.heroBottom}>
            <span className={styles.scrollText}>Scroll</span>
            <div className={styles.scrollLine} />
          </div>
        </div>
      </section>

      {/* Ritual Section */}
      <section className={styles.ritual}>
        <div className={`container ${styles.ritualContent}`}>
          <h2 className={styles.ritualHeadline}>Where every cup is a quiet ritual.</h2>
          <div className={styles.ritualBody}>
            <p>
              Get Fein is a specialty coffee concept dedicated to slowing down. We source single-origin
              beans from ethical farms and brew them with the precision of a craftsperson and the warmth
              of a neighbor.
            </p>
            <Link href="/about" className={styles.ritualLink}>Our Story →</Link>
          </div>
        </div>
      </section>

      {/* Signatures Section */}
      <section className={styles.signatures}>
        <div className="container">
          <div className={styles.sigHeader}>
            <span className={styles.sigTitle}>Signatures</span>
            <Link href="/menu" className={styles.sigLink}>Full Menu →</Link>
          </div>
          <div className={styles.sigGrid}>
            <div className={styles.sigCard}>
              <div className={styles.sigImageWrap}>
                <Image src="/images/sig-cortado.png" alt="Signature Cortado" fill className={styles.sigImage} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className={styles.sigName}>Signature Cortado</h3>
              <p className={styles.sigDesc}>Equal parts espresso & steamed milk</p>
              <div className={styles.sigPrice}>$5.50</div>
            </div>
            <div className={styles.sigCard}>
              <div className={styles.sigImageWrap}>
                <Image src="/images/sig-coldbloom.png" alt="Cold Bloom" fill className={styles.sigImage} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className={styles.sigName}>Cold Bloom</h3>
              <p className={styles.sigDesc}>24-hour cold brew, oat milk, wildflower honey</p>
              <div className={styles.sigPrice}>$7.00</div>
            </div>
            <div className={styles.sigCard}>
              <div className={styles.sigImageWrap}>
                <Image src="/images/sig-pourover.png" alt="Single Origin Pour-Over" fill className={styles.sigImage} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className={styles.sigName}>Single Origin Pour-Over</h3>
              <p className={styles.sigDesc}>Ethiopia Yirgacheffe, rotating micro-lot</p>
              <div className={styles.sigPrice}>$6.50</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className={styles.instagram}>
        <div className="container">
          <div className={styles.instaHeader}>
            <span className={styles.instaTitle}>@getfeincoffee</span>
            <a href="https://instagram.com/getfeincoffee" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>Follow</a>
          </div>
          <div className={styles.instaGrid}>
            <div className={styles.instaItem}>
              <Image src="/images/hero.png" alt="Instagram post" fill className={styles.instaImage} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className={styles.instaItem}>
              <Image src="/images/sig-cortado.png" alt="Instagram post" fill className={styles.instaImage} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className={styles.instaItem}>
              <Image src="/images/about-origin.png" alt="Instagram post" fill className={styles.instaImage} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className={styles.instaItem}>
              <Image src="/images/about-community.png" alt="Instagram post" fill className={styles.instaImage} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
