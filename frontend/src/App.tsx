import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import About from './components/About';
import useGlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const global = useGlobalStyles();
  
  return (
    <div className={ global.root }>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" className={global.content}>
        <Switch>
          <Route exact path="/" render={() => "<Login auth={auth} />"} />
          <Route path="/about" component={About} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
