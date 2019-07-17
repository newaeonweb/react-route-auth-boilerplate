import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForm(event) {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(user);
      this.fetchLogin(user.email, user.password);
      this.setState(initialState);
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

  fetchLogin(email, password) {
    const { history } = this.props;
    return fetch('http://localhost:3000/api/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log(json);
          this.setState({ user: { name: json.name, email: json.email } });
          console.log('state:', this.state);
          history.push('/character');
        });
      } else {
        return response.json().then(json => {
          console.log(json);
          this.setState({ errorMessage: json.message });
        });
      }
    });
  }

  render() {
    const { email, password, errorMessage } = this.state;
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

export default Signin;
