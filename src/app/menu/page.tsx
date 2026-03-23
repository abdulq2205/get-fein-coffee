"use client";

import { useState } from 'react';
import menuData from '@/data/menu.json';
import styles from './page.module.css';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

const categories = [
  { key: 'espresso', label: 'Espresso' },
  { key: 'filter', label: 'Filter' },
  { key: 'cold', label: 'Cold' },
  { key: 'tea', label: 'Tea' },
  { key: 'food', label: 'Food' },
  { key: 'pastry', label: 'Pastry' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('espresso');
  const items: MenuItem[] = (menuData as Record<string, MenuItem[]>)[activeCategory] || [];

  return (
    <div className="container">
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>The Sensory Index</span>
        <h1 className={styles.pageTitle}>What we make.</h1>
      </header>

      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.tab} ${activeCategory === cat.key ? styles.tabActive : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.menuList}>
        {items.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>{item.name}</div>
              <div className={styles.itemDesc}>{item.description}</div>
            </div>
            <span className={styles.itemPrice}>{item.price}</span>
          </div>
        ))}
      </div>

      <div className={styles.sourcing}>
        <p className={styles.sourcingText}>
          All beans are sourced through direct trade relationships. We know the farms, and they know us.
        </p>
      </div>
    </div>
  );
}
