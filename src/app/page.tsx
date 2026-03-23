import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Using actual artifacts generated
// Need to match the file names dynamically or just manually read the generated file names.
// I will use standard names and rename via command later if needed, but the command copied them exactly.

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image 
          src="/images/hero_background_1774294371186.png" 
          alt="Get Fein Coffee minimalist interior" 
          fill
          priority
          className={styles.heroBackground}
        />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>FEIN.</h1>
          <p className={styles.heroSubtitle}>Experience Precision. Taste the Aesthetic.</p>
          <Link href="/menu" className="btn">
            View Menu
          </Link>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <h2 className="text-center">The Aesthetic</h2>
          {/* Instagram Grid Layout */}
          <div className={styles.grid}>
             {/* Note: An actual application would fetch this array from a CMS */}
             <div className={styles.gridItem}>
               <Image 
                 src="/images/matcha_pour_1774294386882.png" 
                 alt="Vibrant Matcha Pour" 
                 fill
                 sizes="(max-width: 768px) 33vw, 400px"
                 className={styles.gridImage} 
               />
             </div>
             <div className={styles.gridItem}>
               <Image 
                 src="/images/coffee_cup_1774294401597.png" 
                 alt="Ceramic aesthetic coffee cup" 
                 fill
                 sizes="(max-width: 768px) 33vw, 400px"
                 className={styles.gridImage} 
               />
             </div>
             <div className={styles.gridItem}>
               <Image 
                 src="/images/hero_background_1774294371186.png" 
                 alt="Barista at the espresso machine" 
                 fill
                 sizes="(max-width: 768px) 33vw, 400px"
                 className={styles.gridImage} 
               />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
