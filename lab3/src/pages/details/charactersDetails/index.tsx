import React, { ReactElement } from 'react';
import { characters } from 'pages/Characters';
import { comics } from 'pages/Comics';
import { Post } from 'types/post';
import { useParams } from 'react-router-dom';
import { series } from 'pages/Series';
import { Links } from 'components/Links';
import styles from '../details.module.css';

export const CharactersDetails = (): ReactElement => {
  const { id } = useParams();
  const idNumber = Number(id);
  const character: Post | undefined = characters.find(
    (item) => item.id === idNumber
  );

  if (!character) {
    return <div>Character not found</div>;
  }
  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={character.img} alt="" />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>{character.name}</h2>
        <p>{character.disc}</p>
      </div>
      <Links
        content={character.comics}
        array={comics}
        title="Comics"
        link="/comics/"
      />
      <Links
        content={character.series}
        array={series}
        title="Series"
        link="/series/"
      />
    </div>
  );
};
