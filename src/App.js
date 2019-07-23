import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

import HomePage from './pages/home/home';
import CharacterList from './pages/character/character-list';
import CharacterDetail from './pages/character/character-detail';
import NotFound from './pages/shared/NotFound';

import EpisodeList from './pages/episode/episode-list';
import EpisodeDetail from './pages/episode/episode-detail';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';

import Navigation from './pages/layout/Navigation';
import PrivateRoute from './pages/layout/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Navigation />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute exact path="/character" component={CharacterList} />
            <PrivateRoute
              exact
              path="/character/:id"
              component={CharacterDetail}
            />
            <PrivateRoute exact path="/episode" component={EpisodeList} />
            <PrivateRoute exact path="/episode/:id" component={EpisodeDetail} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
