import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../auth/auth-store/auth-actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.Logout();
    this.props.history.push('/signin');
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
                <Link to="/signin" onClick={this.handleLogout}>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(Navigation)
);
