import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './links.module.css';

interface LinksProps {
  content:
    | {
        resourceURI: string;
        name: string;
      }[]
    | undefined;
  title: string;
  link: string;
}

export const Links = ({
  content,
  title,
  link
}: LinksProps): ReactElement | null => {
  if (content && content?.length !== 0) {
    return (
      <div className={styles.linksContainer}>
        <h2 className={styles.heading}>{title}</h2>
        {content.map((elem) => {
          const id: string = elem.resourceURI.replace(RegExp('.+/'), '');
          return (
            <NavLink to={link + id} key={id} className={styles.link}>
              {elem.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
  return null;
};
