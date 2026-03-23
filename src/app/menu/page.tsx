import menuData from '@/data/menu.json';
import styles from './page.module.css';

export default function MenuPage() {
  return (
    <div className="section container">
      <div className="text-center">
        <h1 className={styles.pageTitle}>Our Menu</h1>
        <p className={styles.pageSubtitle}>Curated beverages and culinary items.</p>
      </div>
      
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Beverages</h2>
        <div className={styles.menuGrid}>
          {menuData.beverages.map((item) => (
            <div key={item.id} className={styles.menuCard}>
              <div className={styles.cardHeader}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>{item.price}</span>
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Culinary</h2>
        <div className={styles.menuGrid}>
          {menuData.culinary.map((item) => (
            <div key={item.id} className={styles.menuCard}>
              <div className={styles.cardHeader}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>{item.price}</span>
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
