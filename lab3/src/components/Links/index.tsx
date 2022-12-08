import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import { useTranslation } from 'react-i18next';
import styles from './links.module.css';
import 'i18n';

interface LinksProps {
  content:
    | {
        resourceURI: string;
        name: string;
      }[]
    | undefined;
  title: string;
  link: string;
}

export const Links = ({
  content,
  title,
  link
}: LinksProps): ReactElement | null => {
  const theme = themeStore.darkTheme;

  const { t } = useTranslation();
  if (content && content?.length !== 0) {
    return (
      <div className={styles.linksContainer}>
        <h2
          className={
            theme ? `${styles.heading} ${styles.dark}` : styles.heading
          }
        >
          {t(title)}
        </h2>
        {content.map((elem) => {
          const id: string = elem.resourceURI.replace(RegExp('.+/'), '');
          return (
            <NavLink
              to={link + id}
              key={id}
              className={theme ? `${styles.link} ${styles.dark}` : styles.link}
            >
              {elem.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
  return null;
};
