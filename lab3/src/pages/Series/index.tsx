import { Loading } from 'components/Loading';
import { Pagination } from 'components/Pagination';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import seriesStore from 'stores/SeriesStore';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Series = observer((): ReactElement => {
  const { page } = useParams();

  useEffect(() => {
    seriesStore.getSeries((Number(page) - 1) * 18);
  }, [page]);

  const fetchSeries = () => {
    if (seriesStore.loading) return <Loading />;
    return (
      <div>
        <div className={styles.elemsContainer}>
          {seriesStore.series?.data.results.map((elem) => {
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
        <Pagination maxPages={seriesStore.pageLimit} />
      </div>
    );
  };

  return (
    <div>
      <h1>Comics</h1>
      <Searcher store={seriesStore} />
      {fetchSeries()}
    </div>
  );
});
