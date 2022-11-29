import React, { ReactElement } from 'react';
import themeStore from 'stores/ThemeStore';
import styles from './footer.module.css';

export const Footer = (): ReactElement => {
  const CURRENT_YEAR: number = new Date().getFullYear();
  const theme = themeStore.darkTheme;
  return (
    <footer
      className={
        theme
          ? `${styles.footerContainer} ${styles.dark}`
          : styles.footerContainer
      }
    >
      <div className={styles.logoContainer}>
        <img src="/marvel_logo.svg" className={styles.logo} alt="Marvel" />
      </div>
      <p>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</p>
      <a
        href="https://developer.marvel.com/"
        className={theme ? `${styles.link} ${styles.dark}` : styles.link}
        target="_blank"
        rel="noreferrer"
      >
        developer.marvel.com
      </a>
    </footer>
  );
};
