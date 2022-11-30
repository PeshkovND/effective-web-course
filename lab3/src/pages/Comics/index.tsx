import { Loading } from 'components/Loading';
import { Pagination } from 'components/Pagination';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import comicsStore from 'stores/ComicsStore';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Comics = observer((): ReactElement => {
  const { page } = useParams();
  const [searchValue] = useSearchParams();
  const value = searchValue.get('value');

  useEffect(() => {
    if (page) {
      if (value) {
        comicsStore.getByName(value, (Number(page) - 1) * 18);
      } else {
        comicsStore.getComics((Number(page) - 1) * 18);
      }
    }
  }, [page, value]);

  const fetchComics = () => {
    if (comicsStore.loading) return <Loading />;
    if (comicsStore.error) return <div>{comicsStore.error}</div>;
    return (
      <div>
        <div className={styles.elemsContainer}>
          {comicsStore.comics?.data.results.map((elem) => {
            return (
              <Card
                key={elem.id}
                id={elem.id}
                name={elem.title}
                disc={elem.description}
                img={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              />
            );
          })}
        </div>
        <Pagination maxPages={comicsStore.pageLimit} />
      </div>
    );
  };

  return (
    <div>
      <h1>Comics</h1>
      <Searcher />
      {fetchComics()}
    </div>
  );
});
