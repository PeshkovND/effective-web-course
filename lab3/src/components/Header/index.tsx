import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import { MdOutlineLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import styles from './header.module.css';
import 'i18n';

export const Header = observer((): ReactElement => {
  const theme = themeStore.darkTheme;

  const { t, i18n } = useTranslation();

  const lang = i18n.language;

  const checkLanguageButton = () => {
    if (lang === 'en')
      return (
        <button
          className={styles.langButton}
          onClick={() => i18n.changeLanguage('ru')}
          type="button"
        >
          <MdOutlineLanguage /> <span>EN</span>
        </button>
      );
    return (
      <button
        className={styles.langButton}
        onClick={() => i18n.changeLanguage('en')}
        type="button"
      >
        <MdOutlineLanguage /> <span>RU</span>
      </button>
    );
  };

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
      <div className={styles.flexContainer}>
        <nav className={styles.nav}>
          <NavLink className={styles.navItem} to="/characters/page/1">
            {t('header.characters')}
          </NavLink>
          <NavLink className={styles.navItem} to="/comics/page/1">
            {t('header.comics')}
          </NavLink>
          <NavLink className={styles.navItem} to="/series/page/1">
            {t('header.series')}
          </NavLink>
          <NavLink className={styles.navItem} to="/favourites">
            {t('header.favourites')}
          </NavLink>
          <div className={styles.checkboxWrapper} />
        </nav>
        {checkLanguageButton()}
        <input
          type="checkbox"
          className={styles.switch_1}
          onChange={() => themeStore.changeTheme(theme)}
          checked={theme}
        />
      </div>
    </header>
  );
});
