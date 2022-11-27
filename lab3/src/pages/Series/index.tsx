import { Loading } from 'components/Loading';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import seriesStore from 'stores/SeriesStore';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Series = observer((): ReactElement => {
  useEffect(() => {
    seriesStore.getSeries();
  }, []);

  const fetchSeries = () => {
    if (seriesStore.loading) return <Loading />;
    return (
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
    );
  };

  return (
    <div>
      <h1>Comics</h1>
      <Searcher />
      {fetchSeries()}
    </div>
  );
});
