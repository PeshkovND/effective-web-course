import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import { AiFillHeart } from 'react-icons/ai';
import { CharactersStore } from 'stores/CharactersStore';
import { ComicsStore } from 'stores/ComicsStore';
import { SeriesStore } from 'stores/SeriesStore';
import { FavouriteType } from 'types/favouriteType';
import { observer } from 'mobx-react-lite';
import styles from './card.module.css';

interface CardProps {
  id: string;
  name: string;
  disc: string;
  img: string;
  store: CharactersStore | ComicsStore | SeriesStore;
  location: string;
}

export const Card = observer(
  ({ name, disc, img, id, store, location }: CardProps): ReactElement => {
    const theme = themeStore.darkTheme;

    const isElemInFavourites = (elem: FavouriteType) => {
      return !!store.favourites.find((favElem) => favElem.id === elem.id);
    };

    const [favorite, setFavorite] = useState(
      isElemInFavourites({ id, name, img, disc })
    );

    const addToFavorite = () => {
      store.addFavorites({
        id,
        name,
        img,
        disc
      });
      setFavorite(true);
    };

    const removeFromFavorite = () => {
      store.removeFavorites({
        id,
        name,
        img,
        disc
      });
      setFavorite(false);
    };

    return (
      <div
        className={
          theme
            ? `${styles.cardContainer} ${styles.dark}`
            : styles.cardContainer
        }
      >
        <NavLink to={`/${location}/${id}`} className={styles.imgContainer}>
          <img className={styles.img} src={img} alt="" />
        </NavLink>
        <NavLink
          to={`/${location}/${id}`}
          className={theme ? `${styles.name} ${styles.dark}` : styles.name}
        >
          {name}
        </NavLink>
        <p className={theme ? `${styles.disc} ${styles.dark}` : styles.disc}>
          {disc}
        </p>
        <AiFillHeart
          size={30}
          style={{ stroke: 'black', strokeWidth: '40' }}
          className={
            favorite
              ? `${styles.favouriteButton} ${styles.favouriteActive}`
              : `${styles.favouriteButton} ${styles.favouriteUnactive}`
          }
          onClick={
            favorite ? () => removeFromFavorite() : () => addToFavorite()
          }
        />
      </div>
    );
  }
);
