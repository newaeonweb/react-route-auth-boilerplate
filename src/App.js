import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './index.css';

import HomePage from './pages/home/home';
import Band from './pages/band/Band';
import CharacterList from './pages/character/character-list';
import CharacterDetail from './pages/character/character-detail';
import Label from './pages/label/Label';
import NotFound from './pages/shared/NotFound';

import EpisodeList from './pages/episode/episode-list';
import EpisodeDetail from './pages/episode/episode-detail';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <nav className="nav">
          <div className="nav-left">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
              <Link to="/band">Band</Link>
            </li> */}
              <li>
                <Link to="/character">Character</Link>
              </li>
              <li>
                <Link to="/episode">Episode</Link>
              </li>
              {/* <li>
              <Link to="/label">Label</Link>
            </li> */}
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="page-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/band" component={Band} />
            <Route exact path="/label" component={Label} />
            <Route exact path="/character" component={CharacterList} />
            <Route exact path="/character/:id" component={CharacterDetail} />
            <Route exact path="/episode" component={EpisodeList} />
            <Route exact path="/episode/:id" component={EpisodeDetail} />
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
