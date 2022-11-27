import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Links } from 'components/Links';
import charactersStore from 'stores/CharactersStore';
import { observer } from 'mobx-react-lite';
import { Loading } from 'components/Loading';
import styles from '../details.module.css';

export const CharactersDetails = observer((): ReactElement => {
  const { id } = useParams();
  useEffect(() => {
    if (id) charactersStore.getOneCharacter(id);
  }, []);

  if (charactersStore.loading) {
    return <Loading />;
  }

  if (!charactersStore.charactersDetails) {
    return <div>Character with id: {id} not found</div>;
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.img}
          src={`${charactersStore.charactersDetails?.data.results[0].thumbnail.path}.${charactersStore.charactersDetails?.data.results[0].thumbnail.extension}`}
          alt=""
        />
      </div>
      <div className={styles.discription}>
        <h2 className={styles.heading}>
          {charactersStore.charactersDetails?.data.results[0].name}
        </h2>
        <p>{charactersStore.charactersDetails?.data.results[0].description}</p>
      </div>
      <Links
        content={
          charactersStore.charactersDetails?.data.results[0].comics.items
        }
        title="Comics"
        link="/comics/"
      />
      <Links
        content={
          charactersStore.charactersDetails?.data.results[0].series.items
        }
        title="Series"
        link="/series/"
      />
    </div>
  );
});
