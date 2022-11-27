import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import comicsStore from 'stores/ComicsStore';
import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import styles from '../details.module.css';

export const ComicsDetails = observer((): ReactElement => {
  const { id } = useParams();
  useEffect(() => {
    if (id) comicsStore.getOneComics(id);
  }, []);

  if (comicsStore.loading) {
    return <Loading />;
  }

  if (!comicsStore.comicsDetails) {
    return <div>Comics with id: {id} not found</div>;
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img}
          src={`${comicsStore.comicsDetails?.data.results[0].thumbnail.path}.${comicsStore.comicsDetails?.data.results[0].thumbnail.extension}`}
          alt=""
        />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>
          {comicsStore.comicsDetails?.data.results[0].title}
        </h2>
        <p>{comicsStore.comicsDetails?.data.results[0].description}</p>
      </div>
      <Links
        content={comicsStore.comicsDetails?.data.results[0].characters.items}
        title="Characters"
        link="/"
      />
      <Links
        content={[comicsStore.comicsDetails?.data.results[0].series]}
        title="Series"
        link="/series/"
      />
    </div>
  );
});
