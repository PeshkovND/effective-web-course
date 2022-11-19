import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Post } from 'types/post';
import styles from './links.module.css';

interface LinksProps {
  content: number[] | undefined;
  array: Post[];
  title: string;
  link: string;
}

export const Links = ({
  content,
  array,
  title,
  link
}: LinksProps): ReactElement | null => {
  if (content) {
    return (
      <div className={styles.linksContainer}>
        <h2 className={styles.heading}>{title}</h2>
        {content.map((elem) => {
          return (
            <NavLink to={link + elem} key={elem} className={styles.link}>
              {array.find((item) => item.id === elem)?.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
  return null;
};
