import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import seriesStore from 'stores/SeriesStore';
import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import styles from '../details.module.css';

export const SeriesDetails = observer((): ReactElement => {
  const { id } = useParams();
  useEffect(() => {
    if (id) seriesStore.getOneSeries(id);
  }, []);

  if (seriesStore.loading) {
    return <Loading />;
  }

  if (!seriesStore.seriesDetails) {
    return <div>Series with id: {id} not found</div>;
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img}
          src={`${seriesStore.seriesDetails?.data.results[0].thumbnail.path}.${seriesStore.seriesDetails?.data.results[0].thumbnail.extension}`}
          alt=""
        />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>
          {seriesStore.seriesDetails?.data.results[0].title}
        </h2>
        <p>{seriesStore.seriesDetails?.data.results[0].description}</p>
      </div>
      <Links
        content={seriesStore.seriesDetails?.data.results[0].characters.items}
        title="Characters"
        link="/"
      />
      <Links
        content={seriesStore.seriesDetails?.data.results[0].comics.items}
        title="Comics"
        link="/comics/"
      />
    </div>
  );
});
