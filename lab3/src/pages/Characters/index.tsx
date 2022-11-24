import { characters } from 'mocks';
import React, { ReactElement } from 'react';
import { Card } from '../../components/Card';
import { Searcher } from '../../components/Searcher';
import styles from '../pages.module.css';

export const Chartacters = (): ReactElement => {
  return (
    <div>
      <h1>Characters</h1>
      <Searcher />
      <div className={styles.elemsContainer}>
        {characters.map((elem) => {
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
