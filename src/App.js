import React, { useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// local imports
import "./global-styles/reset.scss";
import "./global-styles/fonts.scss";
import "./global-styles/global.scss";
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

const App = () => {
  const [initialWidth, setInitialWidth] = useState(null);

  const appInit = useCallback(() => {
    if (!initialWidth || initialWidth !== window.innerWidth) {
      let vh = window.innerHeight * 0.01;
      window.document.documentElement.style.setProperty('--vh', `${vh}px`);
      setInitialWidth(window.innerWidth);
    }
  }, [initialWidth]);

  useEffect(() => {
    appInit();

    window.addEventListener('resize', appInit);
    return () => window.removeEventListener('resize', appInit);
  }, [appInit]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </Layout>
    </Router>
  );
}
 
export default App;