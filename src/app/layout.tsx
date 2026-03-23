import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: "Get Fein Coffee",
  description: "Specialty coffee, consciously sourced. Brewed with precision. Served with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={`container ${styles.nav}`}>
            <Link href="/" className={styles.logo}>
              FEIN
            </Link>
            <nav className={styles.navRight}>
              <Link href="/menu" className={styles.link}>Menu</Link>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/visit" className={styles.link}>Visit</Link>
              <Link href="/menu" className={styles.orderBtn}>Order</Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footerBrand}>
              <span className={styles.footerLogo}>FEIN</span>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerCol}>
                <Link href="/visit" className={styles.footerLink}>Visit Us</Link>
                <Link href="/menu" className={styles.footerLink}>Menu</Link>
              </div>
              <div className={styles.footerCol}>
                <a href="https://instagram.com/getfeincoffee" className={styles.footerLink} target="_blank" rel="noopener noreferrer">@getfeincoffee</a>
                <Link href="/about" className={styles.footerLink}>About</Link>
              </div>
            </div>
            <p className={styles.copyright}>&copy; 2026 Get Fein Coffee. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
