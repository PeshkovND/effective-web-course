import { comics } from 'mocks';
import React, { ReactElement } from 'react';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Comics = (): ReactElement => {
  return (
    <div>
      <h1>Comics</h1>
      <Searcher />
      <div className={styles.elemsContainer}>
        {comics.map((elem) => {
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
