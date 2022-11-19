import { series } from 'mocks';
import React, { ReactElement } from 'react';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Series = (): ReactElement => {
  return (
    <div>
      <h1>Series</h1>
      <Searcher />
      <div className={styles.elemsContainer}>
        {series.map((elem) => {
          return (
            <Card
              key={elem.id}
              id={elem.id}
              name={elem.name}
              disc={elem.disc}
              img={elem.img}
            />
          );
        })}
      </div>
    </div>
  );
};
