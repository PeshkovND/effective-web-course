import { Loading } from 'components/Loading';
import { Pagination } from 'components/Pagination';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import charactersStore from 'stores/CharactersStore';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Chartacters = observer((): ReactElement => {
  const { page } = useParams();

  useEffect(() => {
    charactersStore.getCharacters((Number(page) - 1) * 18);
  }, [page]);

  const fetchCharacters = () => {
    if (charactersStore.loading) return <Loading />;
    return (
      <div>
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
        <Pagination maxPages={charactersStore.pageLimit} />
      </div>
    );
  };

  return (
    <div>
      <h1>Characters</h1>
      <Searcher store={charactersStore} />
      {fetchCharacters()}
    </div>
  );
});
