import { RouteObject } from 'react-router-dom';
import { Chartacters } from 'pages/Characters';
import { Comics } from 'pages/Comics';
import { Series } from 'pages/Series';
import React from 'react';
import { CharactersDetails } from 'pages/details/CharactersDetails';
import { ComicsDetails } from 'pages/details/ComicsDetails';
import { SeriesDetails } from 'pages/details/SeriesDetails';

// В этом файле массив со всем путями / роутами приложения

export const routes: RouteObject[] = [
  {
    path: '404',
    element: <div>Not Found</div>
  },
  {
    path: '/',
    children: [
      { path: '/page/:page', element: <Chartacters /> },
      {
        path: '/:id',
        element: <CharactersDetails />
      }
    ]
  },
  {
    path: '/comics',
    children: [
      { path: '/comics/page/:page', element: <Comics /> },
      {
        path: '/comics/:id',
        element: <ComicsDetails />
      }
    ]
  },
  {
    path: '/series',
    children: [
      { path: '/series/page/:page', element: <Series /> },
      {
        path: '/series/:id',
        element: <SeriesDetails />
      }
    ]
  }
];
