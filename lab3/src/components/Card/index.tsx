import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import styles from './card.module.css';

interface CardProps {
  id: number;
  name: string;
  disc: string;
  img: string;
}

export const Card = ({ name, disc, img, id }: CardProps): ReactElement => {
  const theme = themeStore.darkTheme;
  return (
    <div
      className={
        theme ? `${styles.cardContainer} ${styles.dark}` : styles.cardContainer
      }
    >
      <NavLink to={`../${String(id)}`} className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </NavLink>
      <NavLink
        to={`../${String(id)}`}
        className={theme ? `${styles.name} ${styles.dark}` : styles.name}
      >
        {name}
      </NavLink>
      <p className={theme ? `${styles.disc} ${styles.dark}` : styles.disc}>
        {disc}
      </p>
    </div>
  );
};
