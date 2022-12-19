import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import charactersStore from 'stores/CharactersStore';
import { observer } from 'mobx-react-lite';
import { Loading } from 'components/Loading';
import themeStore from 'stores/ThemeStore';
import styles from '../details.module.css';

export const CharactersDetails: React.FC = observer(() => {
  const theme = themeStore.darkTheme;
  const { id } = useParams();
  useEffect(() => {
    if (id) charactersStore.getOneCharacter(id);
  }, []);

  if (charactersStore.loading) {
    return <Loading />;
  }

  if (charactersStore.error) return <div>{charactersStore.error}</div>;
  if (charactersStore.charactersDetails) {
    return (
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.img}
            src={`${charactersStore.charactersDetails?.data.results[0].thumbnail.path}.${charactersStore.charactersDetails?.data.results[0].thumbnail.extension}`}
            alt=""
          />
        </div>
        <div
          className={
            theme ? `${styles.discription} ${styles.dark}` : styles.discription
          }
        >
          <h2
            className={
              theme ? `${styles.heading} ${styles.dark}` : styles.heading
            }
          >
            {charactersStore.charactersDetails?.data.results[0].name}
          </h2>
          <p>
            {charactersStore.charactersDetails?.data.results[0].description}
          </p>
        </div>
        <Links
          content={
            charactersStore.charactersDetails?.data.results[0].comics.items
          }
          title="details.comics"
          link="/comics/"
        />
        <Links
          content={
            charactersStore.charactersDetails?.data.results[0].series.items
          }
          title="details.series"
          link="/series/"
        />
      </div>
    );
  }
  return null;
});
