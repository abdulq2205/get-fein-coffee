import Image from 'next/image';
import styles from './page.module.css';

export default function VisitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Get Fein Coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fein Street",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7484,
      "longitude": -73.9967
    },
    "telephone": "+12125550100",
    "email": "hello@getfeincoffee.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <header className={styles.pageHeader}>
          <span className={styles.pageLabel}>Location & Contact</span>
          <h1 className={styles.pageTitle}>Come find us.</h1>
        </header>
      </div>

      {/* Map */}
      <div className={styles.mapContainer}>
        <iframe
          className={styles.mapIframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99670682426037!3d40.74844047138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f2c0f4e5%3A0xb5ef2e0c0c0c0c0c!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1695240210214!5m2!1sen!2sus"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="container">
        <div className={styles.contactGrid}>
          {/* Left: Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <h3>Address</h3>
              <p className={styles.infoLine}>123 Fein Street</p>
              <p className={styles.infoLine}>New York, NY 10001</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Hours</h3>
              <p className={styles.infoLine}>Monday – Friday: 7:00 AM – 6:00 PM</p>
              <p className={styles.infoLine}>Saturday: 8:00 AM – 7:00 PM</p>
              <p className={styles.infoLine}>Sunday: 9:00 AM – 5:00 PM</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Contact</h3>
              <a href="tel:+12125550100" className={styles.contactLink}>+1 (212) 555-0100</a>
              <a href="mailto:hello@getfeincoffee.com" className={styles.contactLink}>hello@getfeincoffee.com</a>
              <a href="https://instagram.com/getfeincoffee" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>@getfeincoffee</a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formSection}>
            <h3>Send a Message</h3>
            <form className={styles.form} action="/api/contact" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={styles.input} placeholder="Your full name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className={styles.input} placeholder="your@email.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className={styles.textarea} placeholder="What's on your mind?" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Full Width Interior Image */}
      <div className={styles.fullImage}>
        <Image
          src="/images/visit-interior.png"
          alt="Get Fein Coffee interior"
          fill
          sizes="100vw"
          className={styles.fullImageInner}
        />
      </div>
    </>
  );
}
