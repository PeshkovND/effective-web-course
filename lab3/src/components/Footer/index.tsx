import React, { ReactElement } from 'react';
import themeStore from 'stores/ThemeStore';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';
import 'i18n';

export const Footer = (): ReactElement => {
  const CURRENT_YEAR: number = new Date().getFullYear();
  const theme = themeStore.darkTheme;

  const { t } = useTranslation();

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
      <p>
        {t('footer.provided')} Marvel. © {CURRENT_YEAR} MARVEL
      </p>
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
