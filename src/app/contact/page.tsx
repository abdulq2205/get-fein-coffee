import styles from './page.module.css';

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Get Fein Coffee",
    "image": "https://getfeincoffee.com/images/hero_background.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Aesthetic Ave",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77002",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "url": "https://getfeincoffee.com",
    "telephone": "+17135550199",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <div className="section container">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className={styles.pageTitle}>Location & Contact</h1>
      <p className={styles.pageSubtitle}>Find us in Houston.</p>
      
      <div className={styles.contactGrid}>
        <div className={styles.infoBlock}>
          <h3>Get In Touch</h3>
          <form className={styles.form} action="/api/contact" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className="btn" style={{marginTop: 'var(--spacing-sm)'}}>Send Message</button>
          </form>
        </div>

        <div className={styles.infoBlock}>
          <h3>Visit Us</h3>
          <p className={styles.infoLine}>123 Aesthetic Ave</p>
          <p className={styles.infoLine}>Houston, TX 77002</p>
          <br />
          <h3>Hours</h3>
          <p className={styles.infoLine}>Mon-Fri: 7am - 7pm</p>
          <p className={styles.infoLine}>Sat-Sun: 8am - 8pm</p>
          
          <div className={styles.mapContainer} style={{marginTop: 'var(--spacing-xl)'}}>
            <iframe 
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110825.1051939103!2d-95.46781498642142!3d29.761825211933075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1695240210214!5m2!1sen!2sus" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
