import { RouteObject } from 'react-router-dom';
import { Chartacters } from 'pages/characters';
import { Comics } from 'pages/comics';
import { Series } from 'pages/series';
import React from 'react';

// В этом файле массив со всем путями / роутами приложения

export const routes: RouteObject[] = [
  {
    path: '404',
    element: <div>Not Found</div>
  },
  {
    path: '/characters',
    element: <Chartacters />
  },
  {
    path: '/comics',
    element: <Comics />
  },
  {
    path: '/series',
    element: <Series />
  }
];
