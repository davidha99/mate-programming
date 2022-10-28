import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { HomePage } from './pages/Home';
import { Tutorial } from './pages/Tutorial';
import { test } from './pages/test';
import { Friends } from './pages/Friends';
import { Scoreboard } from './pages/Scoreboard';
import { Profile } from './pages/Profile';

const App = () => (
  <BrowserRouter>
    <Sidebar/>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tutorial" exact component={Tutorial} />
      <Route path="/friends" exact component={Friends} />
      <Route path="/scoreboard" exact component={Scoreboard} />
      <Route path="/profile" exact component ={Profile} />
      <Route path="/test" exact component={test} />
    </Switch>
  </BrowserRouter>
);

export default App;