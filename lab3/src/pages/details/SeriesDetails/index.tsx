import React, { ReactElement } from 'react';
import { Post } from 'types/post';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import { characters, comics, series } from 'mocks';
import styles from '../details.module.css';

export const SeriesDetails = (): ReactElement => {
  const { id } = useParams();
  const idNumber = Number(id);
  const film: Post | undefined = series.find((item) => item.id === idNumber);

  if (!film) {
    return <div>Film not found</div>;
  }
  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={film.img} alt="" />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>{film.name}</h2>
        <p>{film.disc}</p>
      </div>
      <Links
        content={film.characters}
        array={characters}
        title="Characters"
        link="/"
      />
      <Links
        content={film.comics}
        array={comics}
        title="Comics"
        link="/comics/"
      />
    </div>
  );
};
