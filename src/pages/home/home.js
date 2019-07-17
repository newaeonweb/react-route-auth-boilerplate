import React, { Component } from 'react';
import rkmt from './rkmt.jpeg';

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="container">
            <div className="row is-center">
              <div className="card is-text-center">
                <header>
                  <h1>
                    <a href="/signin">THE RICK AND MORTY</a>
                  </h1>
                </header>
                <img className="img-fluid" src={rkmt} alt="rick &amp; morty" />
                <p className="bg-primary text-white lead">
                  React/Redux using state management and simple authentication
                </p>
                <footer className="is-center">
                  <p>Characters and Episodes</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
