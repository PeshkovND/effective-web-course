import React, { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './pagination.module.css';

interface PaginationProps {
  maxPages: number;
}

export const Pagination = ({ maxPages }: PaginationProps): ReactElement => {
  const { page } = useParams();
  const active = Number(page);
  const pagesToShow = 7;

  const arrayMaker = () => {
    if (active <= (pagesToShow - (pagesToShow % 2)) / 2) {
      return [...Array(pagesToShow).keys()].map((e) => e + 1);
    }
    if (active > maxPages - pagesToShow / 2) {
      return [...Array(pagesToShow).keys()].map(
        (e) => maxPages - (pagesToShow - e - 1)
      );
    }
    return [...Array(pagesToShow).keys()].map(
      (e) => e - (pagesToShow - (pagesToShow % 2)) / 2 + active
    );
  };

  const pages = arrayMaker();

  return (
    <nav className={styles.pag}>
      <ul className={styles.pagContainer}>
        {active !== 1 ? (
          <li>
            <Link to={`../page/${1}`} className={styles.pagElem}>
              <img src="/arrow.svg" alt="Begin" />
            </Link>
          </li>
        ) : null}
        {pages.map((elem) => (
          <li key={elem}>
            <Link
              to={`../page/${elem}`}
              className={
                elem === active
                  ? `${styles.pagElem} ${styles.active}`
                  : styles.pagElem
              }
            >
              {elem}
            </Link>
          </li>
        ))}
        {active !== maxPages ? (
          <li>
            <Link
              to={`../page/${maxPages}`}
              className={`${styles.pagElem} ${styles.lastArrow}`}
            >
              <img src="/arrow.svg" alt="Begin" />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
