"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type MenuData = Record<string, MenuItem[]>;

const categoryLabels: Record<string, string> = {
  espresso: 'Espresso',
  filter: 'Filter',
  cold: 'Cold',
  tea: 'Tea',
  food: 'Food',
  pastry: 'Pastry',
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

  const handleItemChange = (category: string, index: number, field: keyof MenuItem, value: string) => {
    if (!data) return;
    const newData = { ...data };
    newData[category] = [...newData[category]];
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
    } catch {
      setStatus('Error occurred while saving.');
    }
  };

  if (loading || !data) {
    return <div className="container" style={{padding: '10rem 0', textAlign: 'center'}}>Loading Admin Panel...</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Data Management</h1>
        <button className={styles.saveBtn} onClick={handleSave}>Publish Changes</button>
      </header>

      {status && <div className={styles.statusMessage}>{status}</div>}

      {Object.keys(data).map((category) => (
        <section key={category} className={styles.section}>
          <h2 className={styles.sectionTitle}>{categoryLabels[category] || category}</h2>
          <div className={styles.itemGrid}>
            {data[category].map((item: MenuItem, i: number) => (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label>Name</label>
                    <input className={styles.input} value={item.name} onChange={(e) => handleItemChange(category, i, 'name', e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Price</label>
                    <input className={styles.input} value={item.price} onChange={(e) => handleItemChange(category, i, 'price', e.target.value)} />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Description</label>
                  <input className={styles.input} value={item.description} onChange={(e) => handleItemChange(category, i, 'description', e.target.value)} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
