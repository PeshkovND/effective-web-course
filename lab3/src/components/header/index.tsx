import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src="/marvel_logo.svg" className={styles.logo} alt="Marvel" />
      </div>
      <nav className={styles.nav}>
        <NavLink className={styles.navItem} to="/">
          Chartacters
        </NavLink>
        <NavLink className={styles.navItem} to="/comics">
          Comics
        </NavLink>
        <NavLink className={styles.navItem} to="/series">
          Series
        </NavLink>
      </nav>
    </header>
  );
};
