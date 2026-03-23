import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className="section container">
      <h1 className={styles.pageTitle}>About Get Fein</h1>
      <p className={styles.pageSubtitle}>The story behind the minimalist coffee & matcha experience.</p>
      
      <div className={styles.asymmetricBlock}>
        <div className={styles.textContent}>
          <h2>Precision in Every Pour.</h2>
          <p>
            Founded in Houston, Get Fein Coffee was born out of a desire for absolute precision. 
            We treat coffee not just as a morning ritual, but as an aesthetic artform. 
            Every bean is meticulously sourced and roasted to ensure a flawless extraction process.
          </p>
          <p>
            Our minimalist spaces are designed to eliminate distractions, allowing the vibrant flavors 
            of our signature roasts to take center stage. 
          </p>
        </div>
        <div className={styles.mediaContent}>
          {/* We will map proper dynamic image sources here once generated */}
          <Image 
            src="/images/about_interior.png" 
            alt="Minimalist coffee shop interior" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.asymmetricBlock}>
        <div className={styles.textContent}>
          <h2>Sourced with Integrity.</h2>
          <p>
            We partner exclusively with sustainable, single-origin farms. Our signature robust espresso 
            is a product of generations of farming expertise, combined with modern roasting technology. 
          </p>
          <p>
            Whether it is our ceremonial grade matcha sourced from Uji, Japan, or our deep, dark espresso 
            roasts, uncompromising quality is our only metric.
          </p>
        </div>
        <div className={styles.mediaContent}>
          <Image 
            src="/images/about_beans.png" 
            alt="Freshly roasted espresso beans" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
