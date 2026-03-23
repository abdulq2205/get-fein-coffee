import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: "Get Fein Coffee",
  description: "Aesthetic Coffee & Tea Shop",
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
              FEIN.
            </Link>
            <nav className={styles.links}>
              <Link href="/menu" className={styles.link}>menu</Link>
              <Link href="/about" className={styles.link}>about</Link>
              <Link href="/contact" className={styles.link}>location</Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Get Fein Coffee. Minimalist Aesthetics.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
