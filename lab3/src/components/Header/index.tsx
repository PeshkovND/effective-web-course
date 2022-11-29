import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import styles from './header.module.css';

export const Header = observer((): ReactElement => {
  const theme = themeStore.darkTheme;

  return (
    <header
      className={
        theme
          ? `${styles.headerContainer} ${styles.dark}`
          : styles.headerContainer
      }
    >
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
        <input type="checkbox" onChange={() => themeStore.changeTheme(theme)} />
      </nav>
    </header>
  );
});
