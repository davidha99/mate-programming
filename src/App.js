import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { HomePage } from './pages/Home';
import { Tutorial } from './pages/Tutorial';
import { test } from './pages/test';
import { Friends } from './pages/Friends';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tutorial" exact component={Tutorial} />
      <Route path="/friends" exact component={Friends} />
      <Route path="/test" exact component={test} />
    </Switch>
  </BrowserRouter>
);

export default App;