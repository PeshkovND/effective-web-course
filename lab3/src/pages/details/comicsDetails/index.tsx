import React, { ReactElement } from 'react';
import { characters } from 'pages/characters';
import { comics } from 'pages/comics';
import { Post } from 'types/post';
import { NavLink, useParams } from 'react-router-dom';
import { series } from 'pages/series';
import styles from '../details.module.css';

export const ComicsDetails = (): ReactElement => {
  const { id } = useParams();
  const idNumber = Number(id);
  const comic: Post | undefined = comics.find((item) => item.id === idNumber);

  if (!comic) {
    return <div>Comics not found</div>;
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
          <img className={styles.img} src={comic.img} alt="" />
        </div>
        <div>
          <h2 className={styles.heading}>{comic.name}</h2>
          <p>{comic.disc}</p>
        </div>
      </div>
      {checkContent(comic.characters, characters, 'Characters', '/')}
      {checkContent(comic.series, series, 'Series', '/series/')}
    </div>
  );
};
