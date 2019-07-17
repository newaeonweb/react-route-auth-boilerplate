import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home/home';
import Band from './pages/band/Band';
import CharacterList from './pages/character/character-list';
import CharacterDetail from './pages/character/character-detail';
import Label from './pages/label/Label';
import NotFound from './pages/shared/NotFound';
import * as serviceWorker from './serviceWorker';
import EpisodeList from './pages/episode/episode-list';
import EpisodeDetail from './pages/episode/episode-detail';

const routing = (
  <Router>
    <div className="layout">
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/band">Band</Link>
          </li>
          <li>
            <Link to="/character">Character</Link>
          </li>
          <li>
            <Link to="/episode">Episode</Link>
          </li>
          <li>
            <Link to="/label">Label</Link>
          </li>
        </ul>
      </div>
      <div className="page-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/band" component={Band} />
          <Route exact path="/label" component={Label} />
          <Route exact path="/character" component={CharacterList} />
          <Route exact path="/character/:id" component={CharacterDetail} />
          <Route exact path="/episode" component={EpisodeList} />
          <Route exact path="/episode/:id" component={EpisodeDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
