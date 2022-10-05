import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { HomePage } from './pages/Home';
import { Tutorial } from './pages/Tutorial';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tutorial" exact component={Tutorial} />
    </Switch>
  </BrowserRouter>
);

export default App;