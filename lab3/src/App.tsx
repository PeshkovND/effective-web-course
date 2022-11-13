import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import React, { ReactElement } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Chartacters } from './pages/characters';
import { Comics } from './pages/comics';
import { Series } from './pages/series';

function App(): ReactElement {
  const routes: RouteObject[] = [
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

  const element = useRoutes(routes);

  return (
    <div className="App">
      <div>
        <Header />
        <div className="contentLayout">{element}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
