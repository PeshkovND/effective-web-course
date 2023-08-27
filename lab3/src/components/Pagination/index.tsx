import React, { ReactElement } from 'react';
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom';
import themeStore from 'stores/ThemeStore';
import styles from './pagination.module.css';

interface PaginationProps {
  maxPages: number;
}

export const Pagination = ({ maxPages }: PaginationProps): ReactElement => {
  const { page } = useParams();
  const active = Number(page);
  const pagesToShow = 7;
  const [searchValue] = useSearchParams();
  const value = searchValue.get('value');
  const navigation = useNavigate();
  const theme = themeStore.darkTheme;
  const pagElemStyle = theme
    ? `${styles.pagElem} ${styles.dark}`
    : styles.pagElem;

  if (maxPages === 1 || maxPages === 0) {
    return <div />;
  }

  const paginationNavigate = (num: number) => {
    if (value)
      navigation({
        pathname: `../page/${num}`,
        search: `?${createSearchParams({ value })}`
      });
    else
      navigation({
        pathname: `../page/${num}`
      });
  };

  const arrayMaker = () => {
    if (maxPages <= pagesToShow) {
      return [...Array(maxPages).keys()].map((e) => e + 1);
    }
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
            <div className={pagElemStyle} onClick={() => paginationNavigate(1)}>
              {'<<'}
            </div>
          </li>
        ) : null}
        {pages.map((elem) => (
          <li key={elem}>
            <div
              className={
                elem === active
                  ? `${pagElemStyle} ${styles.active}`
                  : pagElemStyle
              }
              onClick={() => paginationNavigate(elem)}
            >
              {elem}
            </div>
          </li>
        ))}
        {active !== maxPages ? (
          <li>
            <div
              className={pagElemStyle}
              onClick={() => paginationNavigate(maxPages)}
            >
              {'>>'}
            </div>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
