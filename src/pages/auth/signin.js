import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as AuthAction from './auth-store/auth-actions';
import './auth.css';

const initialState = {
  email: 'johnny@cash.com',
  password: '123456',
  user: {},
  errorMessage: null,
};

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.errorMessage) {
      this.props.history.push('/character');
    }
    return;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForm(event) {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      this.props.action.PostLogin(this.state);
    }
  }

  validateForm() {
    let emailError = '';

    if (!this.state.email.includes('@')) {
      emailError = 'Invalid Email';
    }

    if (emailError) {
      this.setState({ errorMessage: emailError });
      return false;
    }

    return true;
  }

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props.user;

    return (
      <div className="container">
        <div className="form">
          <br />
          <h3 className="is-text-center">Signin</h3>
          <hr />
          <div>
            <div className="text-error is-text-center">{errorMessage}</div>
          </div>
          <form onSubmit={this.handleForm}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="form-control"
                placeholder="enter a password"
                required
              />
            </div>
            <br />
            <button type="submit" className="button dark is-full-width">
              Sign-in
            </button>
            <br />
            <p className="is-text-center">
              <small>
                Don't have an <Link to={'signup'}>account</Link> yet?
              </small>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  user: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapActionToProps = dispatch => ({
  action: bindActionCreators(AuthAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Signin);
