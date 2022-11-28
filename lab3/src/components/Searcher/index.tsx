import { observer } from 'mobx-react-lite';
import React, { ReactElement, useState } from 'react';
import { CharactersStore } from 'stores/CharactersStore';
import { ComicsStore } from 'stores/ComicsStore';
import { SeriesStore } from 'stores/SeriesStore';
import styles from './searcher.module.css';

interface SearcherProps {
  store: CharactersStore | ComicsStore | SeriesStore;
}

export const Searcher = observer(({ store }: SearcherProps): ReactElement => {
  const [value, setValue] = useState('');

  return (
    <form className={styles.inputContainer}>
      <input
        type="search"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          store.getByName(value, 0);
        }}
      >
        Search
      </button>
    </form>
  );
});
