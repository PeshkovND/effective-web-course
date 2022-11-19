import React, { ReactElement } from 'react';
import { characters } from 'pages/characters';
import { comics } from 'pages/comics';
import { Post } from 'types/post';
import { NavLink, useParams } from 'react-router-dom';
import { series } from 'pages/series';
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

  const checkContent = (
    content: number[] | undefined,
    array: Post[],
    title: string,
    link: string
  ) => {
    if (content) {
      return (
        <div className={styles.linksContainer}>
          <h2 className={styles.heading}>{title}</h2>
          {content.map((elem) => {
            return (
              <NavLink to={link + elem} key={elem} className={styles.link}>
                {array.find((item) => item.id === elem)?.name}
              </NavLink>
            );
          })}
        </div>
      );
    }
    return [];
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={character.img} alt="" />
        </div>
        <div>
          <h2 className={styles.heading}>{character.name}</h2>
          <p>{character.disc}</p>
        </div>
      </div>
      {checkContent(character.comics, comics, 'Comics', '/comics/')}
      {checkContent(character.series, series, 'Series', '/series/')}
    </div>
  );
};
