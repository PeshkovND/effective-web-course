import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import React, { ReactElement } from 'react';
import themeStore from 'stores/ThemeStore';
import { observer } from 'mobx-react-lite';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { routes } from './routes';

const App = observer((): ReactElement => {
  const routing: RouteObject[] = routes;
  const theme = themeStore.darkTheme;
  const element = useRoutes(routing);

  return (
    <div className="App">
      <div className="flexContainer">
        <Header />
        <div className={theme ? 'contentLayout dark' : 'contentLayout'}>
          {element}
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default App;
