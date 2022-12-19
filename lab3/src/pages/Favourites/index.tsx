import { Card } from 'components/Card';
import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import charactersStore from 'stores/CharactersStore';
import comicsStore from 'stores/ComicsStore';
import seriesStore from 'stores/SeriesStore';
import { useTranslation } from 'react-i18next';
import styles from '../pages.module.css';
import 'i18n';

export const Favourites = observer((): ReactElement => {
  const { t } = useTranslation();

  const checkFavourites = () => {
    if (
      charactersStore.favourites.length === 0 &&
      comicsStore.favourites.length === 0 &&
      seriesStore.favourites.length === 0
    ) {
      return <div>{t('pages.emptyFavorites')}</div>;
    }
    return (
      <div className={styles.elemsContainer}>
        {charactersStore.favourites.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            img={elem.img}
            disc={elem.disc}
            name={elem.name}
            store={charactersStore}
            location="characters"
          />
        ))}
        {comicsStore.favourites.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            img={elem.img}
            disc={elem.disc}
            name={elem.name}
            store={comicsStore}
            location="comics"
          />
        ))}
        {seriesStore.favourites.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            img={elem.img}
            disc={elem.disc}
            name={elem.name}
            store={seriesStore}
            location="series"
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <h1>{t('pages.favourites')}</h1>
      {checkFavourites()}
    </div>
  );
});
