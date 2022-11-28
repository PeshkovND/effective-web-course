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
        <NavLink className={styles.navItem} to="/page/1">
          Chartacters
        </NavLink>
        <NavLink className={styles.navItem} to="/comics/page/1">
          Comics
        </NavLink>
        <NavLink className={styles.navItem} to="/series/page/1">
          Series
        </NavLink>
      </nav>
    </header>
  );
};
