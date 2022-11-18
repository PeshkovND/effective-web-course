import { RouteObject } from 'react-router-dom';
import { Chartacters } from 'pages/characters';
import { Comics } from 'pages/comics';
import { Series } from 'pages/series';
import React from 'react';
import { CharactersDetails } from 'pages/details/charactersDetails';
import { ComicsDetails } from 'pages/details/comicsDetails';

// В этом файле массив со всем путями / роутами приложения

export const routes: RouteObject[] = [
  {
    path: '404',
    element: <div>Not Found</div>
  },
  {
    path: '/',
    children: [
      { index: true, element: <Chartacters /> },
      {
        path: '/:id',
        element: <CharactersDetails />
      }
    ]
  },
  {
    path: '/comics',
    children: [
      { index: true, element: <Comics /> },
      {
        path: '/comics/:id',
        element: <ComicsDetails />
      }
    ]
  },
  {
    path: '/series',
    element: <Series />
  }
];
