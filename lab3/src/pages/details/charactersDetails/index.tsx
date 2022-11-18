import React, { ReactElement } from 'react';
import { characters } from 'pages/characters';
import { Post } from 'types/post';
import { useParams } from 'react-router-dom';
import styles from '../details.module.css';

export const CharactersDetails = (): ReactElement => {
  const { id } = useParams();
  const idNumber = Number(id);
  const character: Post | undefined = characters.find(
    (item) => item.id === idNumber
  );

  if (!character) return <div>Character not found</div>;

  return (
    <div className={styles.mainInfoContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={character.img} alt="" />
      </div>
      <div>
        <h2 className={styles.heading}>{character.name}</h2>
        <p>{character.disc}</p>
      </div>
      <div>
        <h2 className={styles.heading}>Comics</h2>
      </div>
      <div>
        <h2 className={styles.heading}>Series</h2>
      </div>
    </div>
  );
};
