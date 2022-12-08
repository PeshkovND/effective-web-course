import { Loading } from 'components/Loading';
import { Pagination } from 'components/Pagination';
import { observer } from 'mobx-react-lite';
import React, { ReactElement, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import seriesStore from 'stores/SeriesStore';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';
import 'i18n';

export const Series = observer((): ReactElement => {
  const { page } = useParams();
  const [searchValue] = useSearchParams();
  const value = searchValue.get('value');

  const { t } = useTranslation();

  useEffect(() => {
    if (page) {
      if (value) {
        seriesStore.getByName(value, (Number(page) - 1) * 18);
      } else {
        seriesStore.getSeries((Number(page) - 1) * 18);
      }
    }
  }, [page, value]);

  const fetchSeries = () => {
    if (seriesStore.loading) return <Loading />;
    if (seriesStore.error) return <div>{seriesStore.error}</div>;
    return (
      <div>
        <div className={styles.elemsContainer}>
          {seriesStore.series?.data.results.map((elem) => {
            return (
              <Card
                key={elem.id}
                id={String(elem.id)}
                name={elem.title}
                disc={elem.description}
                img={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                store={seriesStore}
                location="series"
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
      <h1>{t('pages.series')}</h1>
      <Searcher />
      {fetchSeries()}
    </div>
  );
});
