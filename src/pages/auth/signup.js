import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errorMessage: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleForm(event) {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  }

  render() {
    const { name, email, password, errorMessage } = this.state;
    return (
      <div className="container">
        <div className="form">
          <br />
          <h3 className="is-text-center">Signup</h3>
          <hr />
          <div>
            <div className="text-error is-text-center">{errorMessage}</div>
          </div>
          <form onSubmit={this.handleForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="form-control"
                placeholder="enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="enter your email"
                required
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
              Sign-up
            </button>
            <br />
            <p className="is-text-center">
              <small>
                Already have an <Link to={'signin'}>account</Link>?
              </small>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
