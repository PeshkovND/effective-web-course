import React, { ReactElement } from 'react';
import { Post } from 'types/post';
import { Card } from '../../components/card';
import { Searcher } from '../../components/searcher';
import styles from '../pages.module.css';

export const Comics = (): ReactElement => {
  const comics: Post[] = [
    {
      id: 0,
      name: 'Captain America/Iron Man (2021 - 2022)',
      disc: 'A government agent turned Hydra provocateur stages a daring breakout on her way to prison, attracting the attention of both Iron Man and Captain America. When Steve and Tony realize they both have a connection to the slippery fugitive, they team up to track her down—only to discover she’s not the only player on the board with big plans and sinister motives…Derek Landy (FALCON & WINTER SOLDIER; THE BLACK ORDER) and Angel Unzueta (IRON MAN; STAR WARS) team up to bring you a thrilling adventure starring a fan-favorite dynamic duo!',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/10/61a8e1bdbd3ef/standard_incredible.jpg'
    },
    {
      id: 1,
      name: 'Captain America: Steve Rogers (2016) #10',
      disc: "The unbeatable Taskmaster is back! And what's worse for Cap is that he's learned Steve Rogers' greatest secret!",
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/6/50/58824eb0b4d44/clean.jpg'
    },
    {
      id: 2,
      name: 'Spider-Man: Miles Morales Omnibus (Hardcover)',
      disc: 'ON SALE FEBRUARY 2020. Welcome to the Marvel Universe, Miles Morales! Visionary writer Brian Michael Bendis completes his eighteen-year association with wall-crawlers by bringing the Ultimate Spider-Man to a brand-new life on a brand-new world — and not everything is how it was! Miles will have to find his feet quickly, though, when he goes up against one of the biggest bads in the Marvel Universe! Then, the villainous Black Cat plots to get her claws in this new Spidey — but will Miles find romance with the other-dimensional Spider-Gwen? And Spidey finds himself caught in the middle when Marvel’s heroes square off in a second Civil War! Plus: The secret history of Miles’ dad…Agent of S.H.I.E.L.D.! And a familiar face returns — along with an all-new, all-deadly Sinister Six! Collecting SPIDER-MAN (2016) #1-21 and #234-240, and SPIDER-GWEN (2015B) #16-18.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5e4c13277b343/clean.jpg'
    },
    {
      id: 3,
      name: 'Hulk (2021) #1',
      disc: "IMMORTAL NO LONGER! CATES & OTTLEY DELIVER A NEW, COLOSSAL-SIZED ERA! 'MAD SCIENTIST' Part 1 of 6 The uncontrollable rage of the Hulk has reached an all-new level, and nobody - including the Avengers - is prepared to handle it. But is it really the Hulk that people should be afraid of, or is there something missing to this puzzle? Join the superstar creative team of Donny Cates and Ryan Ottley as they look to the stars for the next era of HULK!",
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/30/6215050e6c8d5/clean.jpg'
    },
    {
      id: 4,
      name: 'Thor (2020 - Present)',
      disc: 'A BRAND-NEW, SUPERSTAR CREATIVE TEAM TAKES THE KING OF ASGARD TO NEW REALMS OF GLORY! The prince is now a king. All Asgard lies before Thor, the God of Thunder. And after many months of war, the Ten Realms are finally at peace. But the skies above the Realm Eternal are never clear for long. The Black Winter is coming. And the God of the Storm will be powerless before it.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5e011a4977a80/standard_incredible.jpg'
    }
  ];

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
