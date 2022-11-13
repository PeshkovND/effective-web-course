import React, { ReactElement } from 'react';
import { Post } from 'types/post';
import { Card } from '../../components/card';
import { Searcher } from '../../components/searcher';
import styles from '../pages.module.css';

export const Chartacters = (): ReactElement => {
  const characters: Post[] = [
    {
      id: 0,
      name: 'IRON MAN',
      disc: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
      img: 'https://img4.goodfon.ru/wallpaper/nbig/f/d3/iron-man-zheleznyi-chelovek-marvel-komiks-marvel-comics.jpg'
    },
    {
      id: 1,
      name: 'CAPTAIN AMERICA',
      disc: 'Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg'
    },
    {
      id: 2,
      name: 'Spider-Man (Miles Morales)',
      disc: 'In the alternate reality of Earth-1610, a young New York City teen was bitten by a genetically enhanced spider. When the Peter Parker of that dimension was killed, the teen—named Miles Morales—was inspired to take up the fallen mantle.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/037smm_com_crd_01.jpg'
    },
    {
      id: 3,
      name: 'Hulk',
      disc: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg'
    },
    {
      id: 4,
      name: 'thor',
      disc: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg'
    }
  ];

  return (
    <div>
      <h1>Characters</h1>
      <Searcher />
      <div className={styles.elemsContainer}>
        {characters.map((elem) => {
          return (
            <Card
              key={elem.id}
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
