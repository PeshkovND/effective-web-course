import { observer } from 'mobx-react-lite';
import React, { ReactElement } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { CharactersStore } from 'stores/CharactersStore';
import { ComicsStore } from 'stores/ComicsStore';
import { SeriesStore } from 'stores/SeriesStore';
import styles from './searcher.module.css';

interface SearcherProps {
  store: CharactersStore | ComicsStore | SeriesStore;
}

export const Searcher = observer(({ store }: SearcherProps): ReactElement => {
  const navigation = useNavigate();

  const find = (findValue: string) => {
    if (findValue)
      navigation({
        pathname: '../page/1',
        search: `?${createSearchParams({ value: findValue })}`
      });
    else
      navigation({
        pathname: '../page/1'
      });
  };

  const debounce = (ms: number) => {
    let timeout: NodeJS.Timeout;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const findValue = e.target.value;
      store.setLoading();
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        find(findValue);
      }, ms);
    };
  };

  const debInstance = debounce(3000);

  return (
    <input
      type="text"
      className={styles.input}
      onChange={(e) => debInstance(e)}
    />
  );
});
