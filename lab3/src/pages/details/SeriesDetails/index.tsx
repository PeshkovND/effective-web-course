import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import seriesStore from 'stores/SeriesStore';
import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import themeStore from 'stores/ThemeStore';
import styles from '../details.module.css';

export const SeriesDetails: React.FC = observer(() => {
  const theme = themeStore.darkTheme;
  const { id } = useParams();
  useEffect(() => {
    if (id) seriesStore.getOneSeries(id);
  }, []);

  if (seriesStore.loading) {
    return <Loading />;
  }
  if (seriesStore.error) return <div>{seriesStore.error}</div>;
  if (seriesStore.seriesDetails) {
    return (
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.img}
            src={`${seriesStore.seriesDetails?.data.results[0].thumbnail.path}.${seriesStore.seriesDetails?.data.results[0].thumbnail.extension}`}
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
            {seriesStore.seriesDetails?.data.results[0].title}
          </h2>
          <p>{seriesStore.seriesDetails?.data.results[0].description}</p>
        </div>
        <Links
          content={seriesStore.seriesDetails?.data.results[0].characters.items}
          title="details.characters"
          link="/"
        />
        <Links
          content={seriesStore.seriesDetails?.data.results[0].comics.items}
          title="details.comics"
          link="/comics/"
        />
      </div>
    );
  }
  return null;
});
