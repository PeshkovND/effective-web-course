import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './card.module.css';

interface CardProps {
  id: number;
  name: string;
  disc: string;
  img: string;
}

export const Card = ({ name, disc, img, id }: CardProps): ReactElement => {
  return (
    <div className={styles.cardContainer}>
      <NavLink to={String(id)} className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </NavLink>
      <NavLink to={String(id)} className={styles.name}>
        {name}
      </NavLink>
      <p className={styles.disc}>{disc}</p>
    </div>
  );
};
