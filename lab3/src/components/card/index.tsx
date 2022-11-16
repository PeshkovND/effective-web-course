import React, { ReactElement } from 'react';
import styles from './card.module.css';

interface CardProps {
  name: string;
  disc: string;
  img: string;
}

export const Card = ({ name, disc, img }: CardProps): ReactElement => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <span className={styles.name}>{name}</span>
      <p className={styles.disc}>{disc}</p>
    </div>
  );
};
