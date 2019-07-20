import React, { Component } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import './index.css';

import HomePage from './pages/home/home';
import CharacterList from './pages/character/character-list';
import CharacterDetail from './pages/character/character-detail';
import NotFound from './pages/shared/NotFound';

import EpisodeList from './pages/episode/episode-list';
import EpisodeDetail from './pages/episode/episode-detail';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';

import { connect } from 'react-redux';
import { Logout } from './pages/auth/auth-store/auth-actions';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(event) {
    event.preventDefault();
    this.props.Logout();
    history.push('/signin');
  }
  render() {
    const user = this.props.user.user;
    console.log(this.props);

    return (
      <div className="layout">
        <nav className="nav">
          <div className="nav-left">
            {user.email ? (
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/character">Character</Link>
                </li>
                <li>
                  <Link to="/episode">Episode</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="nav-right">
            {!user.email ? (
              <ul>
                <li>
                  <Link to="/signin">Signin</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/">{user.email}</Link>
                </li>
                <li>
                  <Link to="/" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        <div className="page-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
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

// export default App;

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionsToProps = {
  Logout: Logout,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
