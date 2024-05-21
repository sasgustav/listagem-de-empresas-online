import React from 'react';
import styles from './Header.module.css';
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>InfoCidadão</h1>
    <nav className={styles.nav}>
      <Link to="/saude" className={styles.navLink}>Saúde</Link>
      <Link to="/educacao" className={styles.navLink}>Educação</Link>
      {/* ... outros links */}
    </nav>
    <div className={styles.search}>
      <input type="text" className={styles.searchInput} placeholder="Buscar..." />
      <button className={styles.searchButton}>Buscar</button>
    </div>
    <button className={styles.submitButton}>Submeter Link</button>
  </header>
);

export default Header;
