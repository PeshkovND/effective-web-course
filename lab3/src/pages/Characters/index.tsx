import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import charactersStore from 'stores/CharactersStore';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Chartacters = observer((): ReactElement => {
  useEffect(() => {
    charactersStore.getCharacters();
  }, []);

  const fetchCharacters = () => {
    if (charactersStore.loading) return <Loading />;
    return (
      <div className={styles.elemsContainer}>
        {charactersStore.characters?.data.results.map((elem) => {
          return (
            <Card
              key={elem.id}
              id={elem.id}
              name={elem.name}
              disc={elem.description}
              img={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h1>Characters</h1>
      <Searcher />
      {fetchCharacters()}
    </div>
  );
});
