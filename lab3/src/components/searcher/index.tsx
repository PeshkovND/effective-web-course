import React, { ReactElement } from 'react';
import styles from './searcher.module.css';

export const Searcher = (): ReactElement => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} />
      <button type="button" className={styles.button}>
        Search
      </button>
    </div>
  );
};
