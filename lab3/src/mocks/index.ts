import { Post } from 'types/post';

export const characters: Post[] = [
  {
    id: 0,
    name: 'IRON MAN',
    disc: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
    img: 'https://img4.goodfon.ru/wallpaper/nbig/f/d3/iron-man-zheleznyi-chelovek-marvel-komiks-marvel-comics.jpg',
    comics: [0, 1, 2],
    series: [0, 1, 2]
  },
  {
    id: 1,
    name: 'CAPTAIN AMERICA',
    disc: 'Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg',
    comics: [1, 2, 3],
    series: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Spider-Man (Miles Morales)',
    disc: 'In the alternate reality of Earth-1610, a young New York City teen was bitten by a genetically enhanced spider. When the Peter Parker of that dimension was killed, the teen—named Miles Morales—was inspired to take up the fallen mantle.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/037smm_com_crd_01.jpg',
    comics: [2, 3, 4],
    series: [2, 3, 4]
  },
  {
    id: 3,
    name: 'Hulk',
    disc: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg',
    comics: [0, 1, 2],
    series: [0, 1, 2]
  },
  {
    id: 4,
    name: 'thor',
    disc: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg',
    comics: [0, 1, 2],
    series: [0, 1, 2]
  }
];

export const comics: Post[] = [
  {
    id: 0,
    name: 'Captain America/Iron Man (2021 - 2022)',
    disc: 'A government agent turned Hydra provocateur stages a daring breakout on her way to prison, attracting the attention of both Iron Man and Captain America. When Steve and Tony realize they both have a connection to the slippery fugitive, they team up to track her down—only to discover she’s not the only player on the board with big plans and sinister motives…Derek Landy (FALCON & WINTER SOLDIER; THE BLACK ORDER) and Angel Unzueta (IRON MAN; STAR WARS) team up to bring you a thrilling adventure starring a fan-favorite dynamic duo!',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/2/10/61a8e1bdbd3ef/standard_incredible.jpg',
    characters: [0, 1, 2],
    series: [0, 1, 2]
  },
  {
    id: 1,
    name: 'Captain America: Steve Rogers (2016) #10',
    disc: "The unbeatable Taskmaster is back! And what's worse for Cap is that he's learned Steve Rogers' greatest secret!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/6/50/58824eb0b4d44/clean.jpg',
    characters: [1, 2, 3],
    series: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Spider-Man: Miles Morales Omnibus (Hardcover)',
    disc: 'ON SALE FEBRUARY 2020. Welcome to the Marvel Universe, Miles Morales! Visionary writer Brian Michael Bendis completes his eighteen-year association with wall-crawlers by bringing the Ultimate Spider-Man to a brand-new life on a brand-new world — and not everything is how it was! Miles will have to find his feet quickly, though, when he goes up against one of the biggest bads in the Marvel Universe! Then, the villainous Black Cat plots to get her claws in this new Spidey — but will Miles find romance with the other-dimensional Spider-Gwen? And Spidey finds himself caught in the middle when Marvel’s heroes square off in a second Civil War! Plus: The secret history of Miles’ dad…Agent of S.H.I.E.L.D.! And a familiar face returns — along with an all-new, all-deadly Sinister Six! Collecting SPIDER-MAN (2016) #1-21 and #234-240, and SPIDER-GWEN (2015B) #16-18.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5e4c13277b343/clean.jpg',
    characters: [2, 3, 4],
    series: [2, 3, 4]
  },
  {
    id: 3,
    name: 'Hulk (2021) #1',
    disc: "IMMORTAL NO LONGER! CATES & OTTLEY DELIVER A NEW, COLOSSAL-SIZED ERA! 'MAD SCIENTIST' Part 1 of 6 The uncontrollable rage of the Hulk has reached an all-new level, and nobody - including the Avengers - is prepared to handle it. But is it really the Hulk that people should be afraid of, or is there something missing to this puzzle? Join the superstar creative team of Donny Cates and Ryan Ottley as they look to the stars for the next era of HULK!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/30/6215050e6c8d5/clean.jpg',
    characters: [0, 1, 2],
    series: [0, 1, 2]
  },
  {
    id: 4,
    name: 'Thor (2020 - Present)',
    disc: 'A BRAND-NEW, SUPERSTAR CREATIVE TEAM TAKES THE KING OF ASGARD TO NEW REALMS OF GLORY! The prince is now a king. All Asgard lies before Thor, the God of Thunder. And after many months of war, the Ten Realms are finally at peace. But the skies above the Realm Eternal are never clear for long. The Black Winter is coming. And the God of the Storm will be powerless before it.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/20/5e011a4977a80/standard_incredible.jpg',
    characters: [0, 1, 2],
    series: [0, 1, 2]
  }
];

export const series: Post[] = [
  {
    id: 0,
    name: 'What If...?',
    disc: '“What If…?” flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, "What If…?" launches exclusively on Disney+ on August 11, 2021.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif_lob_crd_01.jpg',
    characters: [0, 1, 2],
    comics: [0, 1, 2]
  },
  {
    id: 1,
    name: 'Agents of S.H.I.E.L.D.',
    disc: '“Marvel’s Agents of S.H.I.E.L.D.” stars Clark Gregg, Ming-Na Wen, Chloe Bennet, Iain De Caestecker, Elizabeth Henstridge, Henry Simmons, Natalia Cordova-Buckley and Jeff Ward.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentsofshields7_lob_crd_04.jpg',
    characters: [1, 2, 3],
    comics: [1, 2, 3]
  },
  {
    id: 2,
    name: "Marvel's Avengers",
    disc: 'The Black Panther must decide his loyalties. Is he an Avenger first or King of Wakanda? As the mysterious Shadow Council rises to challenge Wakanda, T’Challa teams up with his sister Shuri to go on missions that no other Avenger can. It’s a globe-trotting journey of espionage and mystery as old foes resurface and new friends are made. In the end, Black Panther must balance defending his home and stopping threats before they start. Is he a sword or shield? Only he can decide.',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedavengers_lob_crd_02.jpg',
    characters: [2, 3, 4],
    comics: [2, 3, 4]
  },
  {
    id: 3,
    name: "Marvel's Cloak and Dagger",
    disc: "In Season 2 of Marvel's Cloak & Dagger, Tyrone (Aubrey Joseph) and Tandy (Olivia Holt) face difficult decisions as young heroes. With new enhanced powers, they tackle a heartless vigilante and uncover an evil preying on young women in their city.",
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/cloakanddagger_lob_crd_02_1.jpg',
    characters: [0, 1, 2],
    comics: [0, 1, 2]
  },
  {
    id: 4,
    name: 'Agent Carter',
    disc: "Dedicated to the fight against new Atomic Age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet. But even as she discovers new friends, a new home – perhaps even a new love – she's about to find out that the bright lights of the post-war Hollywood mask a more sinister threat to everyone she is sworn to protect.",
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentcarters2_lob_crd_03.jpg',
    characters: [0, 1, 2],
    comics: [0, 1, 2]
  }
];
