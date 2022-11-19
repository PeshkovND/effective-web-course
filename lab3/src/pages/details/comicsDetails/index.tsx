import React, { ReactElement } from 'react';
import { characters } from 'pages/Characters';
import { comics } from 'pages/Comics';
import { Post } from 'types/post';
import { useParams } from 'react-router-dom';
import { series } from 'pages/Series';
import { Links } from 'components/Links';
import styles from '../details.module.css';

export const ComicsDetails = (): ReactElement => {
  const { id } = useParams();
  const idNumber = Number(id);
  const comic: Post | undefined = comics.find((item) => item.id === idNumber);

  if (!comic) {
    return <div>Comics not found</div>;
  }
  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={comic.img} alt="" />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>{comic.name}</h2>
        <p>{comic.disc}</p>
      </div>
      <Links
        content={comic.characters}
        array={characters}
        title="Characters"
        link="/"
      />
      <Links
        content={comic.series}
        array={series}
        title="Series"
        link="/series/"
      />
    </div>
  );
};
