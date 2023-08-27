import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import comicsStore from 'stores/ComicsStore';
import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import themeStore from 'stores/ThemeStore';
import styles from '../details.module.css';

export const ComicsDetails: React.FC = observer(() => {
  const theme = themeStore.darkTheme;
  const { id } = useParams();
  useEffect(() => {
    if (id) comicsStore.getOneComics(id);
  }, []);

  if (comicsStore.loading) {
    return <Loading />;
  }

  if (comicsStore.error)
    return (
      <div className={theme ? styles.darkText : undefined}>
        {comicsStore.error}
      </div>
    );
  if (comicsStore.comicsDetails) {
    return (
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.img}
            src={`${comicsStore.comicsDetails?.data.results[0].thumbnail.path}.${comicsStore.comicsDetails?.data.results[0].thumbnail.extension}`}
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
            {comicsStore.comicsDetails?.data.results[0].title}
          </h2>
          <p>{comicsStore.comicsDetails?.data.results[0].description}</p>
        </div>
        <Links
          content={comicsStore.comicsDetails?.data.results[0].characters.items}
          title="details.characters"
          link="/characters/"
        />
        <Links
          content={[comicsStore.comicsDetails?.data.results[0].series]}
          title="details.series"
          link="/series/"
        />
      </div>
    );
  }
  return null;
});
