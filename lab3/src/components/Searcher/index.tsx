import { observer } from 'mobx-react-lite';
import React, { ReactElement, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import styles from './searcher.module.css';

export const Searcher = observer((): ReactElement => {
  const [value, setValue] = useState('');
  const navigation = useNavigate();

  return (
    <form
      className={styles.inputContainer}
      onSubmit={(e) => {
        e.preventDefault();
        if (value)
          navigation({
            pathname: '../page/1',
            search: `?${createSearchParams({ value })}`
          });
        else
          navigation({
            pathname: '../page/1'
          });
      }}
    >
      <input
        type="search"
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
});
