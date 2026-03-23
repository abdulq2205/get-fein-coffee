"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type MenuData = {
  beverages: MenuItem[];
  culinary: MenuItem[];
};

export default function AdminDashboard() {
  const [data, setData] = useState<MenuData | null>(null);
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const handleItemChange = (category: 'beverages' | 'culinary', index: number, field: keyof MenuItem, value: string) => {
    if (!data) return;
    const newData = { ...data };
    newData[category][index] = { ...newData[category][index], [field]: value };
    setData(newData);
  };

  const handleSave = async () => {
    setStatus('Saving...');
    try {
      const res = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus('Changes saved successfully!');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to save changes.');
      }
    } catch (e) {
      setStatus('Error occurred while saving.');
    }
  };

  if (loading || !data) {
    return <div className="container section text-center">Loading Admin Panel...</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Data Management Dashboard</h1>
        <button className={styles.saveBtn} onClick={handleSave}>Publish Changes</button>
      </header>

      {status && <div className={styles.statusMessage}>{status}</div>}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Beverages Menu</h2>
        <div className={styles.itemGrid}>
          {data.beverages.map((item, i) => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Name</label>
                  <input className={styles.input} value={item.name} onChange={(e) => handleItemChange('beverages', i, 'name', e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Price</label>
                  <input className={styles.input} value={item.price} onChange={(e) => handleItemChange('beverages', i, 'price', e.target.value)} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Description</label>
                <input className={styles.input} value={item.description} onChange={(e) => handleItemChange('beverages', i, 'description', e.target.value)} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Culinary Menu</h2>
        <div className={styles.itemGrid}>
          {data.culinary.map((item, i) => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Name</label>
                  <input className={styles.input} value={item.name} onChange={(e) => handleItemChange('culinary', i, 'name', e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Price</label>
                  <input className={styles.input} value={item.price} onChange={(e) => handleItemChange('culinary', i, 'price', e.target.value)} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Description</label>
                <input className={styles.input} value={item.description} onChange={(e) => handleItemChange('culinary', i, 'description', e.target.value)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
