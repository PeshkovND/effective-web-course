import React, { ReactElement } from 'react';
import { Post } from 'types/post';
import { Card } from '../../components/card';
import { Searcher } from '../../components/searcher';
import styles from '../pages.module.css';

export const Series = (): ReactElement => {
  const series: Post[] = [
    {
      id: 0,
      name: 'What If...?',
      disc: '“What If…?” flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, "What If…?" launches exclusively on Disney+ on August 11, 2021.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif_lob_crd_01.jpg'
    },
    {
      id: 1,
      name: 'Agents of S.H.I.E.L.D.',
      disc: '“Marvel’s Agents of S.H.I.E.L.D.” stars Clark Gregg, Ming-Na Wen, Chloe Bennet, Iain De Caestecker, Elizabeth Henstridge, Henry Simmons, Natalia Cordova-Buckley and Jeff Ward.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentsofshields7_lob_crd_04.jpg'
    },
    {
      id: 2,
      name: "Marvel's Avengers",
      disc: 'The Black Panther must decide his loyalties. Is he an Avenger first or King of Wakanda? As the mysterious Shadow Council rises to challenge Wakanda, T’Challa teams up with his sister Shuri to go on missions that no other Avenger can. It’s a globe-trotting journey of espionage and mystery as old foes resurface and new friends are made. In the end, Black Panther must balance defending his home and stopping threats before they start. Is he a sword or shield? Only he can decide.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedavengers_lob_crd_02.jpg'
    },
    {
      id: 3,
      name: "Marvel's Cloak and Dagger",
      disc: "In Season 2 of Marvel's Cloak & Dagger, Tyrone (Aubrey Joseph) and Tandy (Olivia Holt) face difficult decisions as young heroes. With new enhanced powers, they tackle a heartless vigilante and uncover an evil preying on young women in their city.",
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/cloakanddagger_lob_crd_02_1.jpg'
    },
    {
      id: 4,
      name: 'Agent Carter',
      disc: "Dedicated to the fight against new Atomic Age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet. But even as she discovers new friends, a new home – perhaps even a new love – she's about to find out that the bright lights of the post-war Hollywood mask a more sinister threat to everyone she is sworn to protect.",
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentcarters2_lob_crd_03.jpg'
    }
  ];

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
