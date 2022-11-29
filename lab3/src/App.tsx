import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import React, { ReactElement } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { routes } from './routes';

const App = (): ReactElement => {
  const routing: RouteObject[] = routes;

  const element = useRoutes(routing);

  return (
    <div className="App">
      <div>
        <Header />
        <div className="contentLayout">{element}</div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
