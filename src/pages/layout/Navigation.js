import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../auth/auth-store/auth-actions';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(event) {
    event.preventDefault();
    this.props.Logout();
    history.push('/signin');
  }
  render() {
    const user = this.props.user.user;
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionsToProps = {
  Logout: Logout,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navigation);
