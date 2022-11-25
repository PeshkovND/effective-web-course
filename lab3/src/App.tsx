import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import React, { ReactElement, useEffect } from 'react';
import charactersStore from 'stores/CharactersStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { routes } from './routes';

const App = observer((): ReactElement => {
  const routing: RouteObject[] = routes;

  const element = useRoutes(routing);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [element]);

  return (
    <div className="App">
      <div>
        <Header />
        <div className="contentLayout">{element}</div>
      </div>
      <Footer />
    </div>
  );
});

export default App;
