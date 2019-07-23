import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './character.css';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getCharacterDetail();
  }

  getCharacterDetail() {
    const id = this.props.match.params.id;
    const apiUrl = 'https://rickandmortyapi.com/api/character/' + id;
    this.setState({ isLoading: true });
    return fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ character: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  EpisodeList(props) {
    const episodes = props.episodes;
    if (episodes) {
      const listItems = episodes.map((episode, i) => (
        <li key={i}>
          <Link to={'/episode/' + (i + 1)}>Episode: {i + 1}</Link>{' '}
        </li>
      ));
      return <ul>{listItems}</ul>;
    }
    return '';
  }

  render() {
    const { character, error, isLoading } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="is-center">Loading...</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div>
          <div className="card is-text-center">
            <header>
              <h4 className="text-primary ">{character.name}</h4>
              <img src={character.image} alt="" />
              <p>
                Status: {character.status} | Species: {character.species} |
                Gender: {character.gender}
              </p>
              <br />
              <hr />
            </header>
            <div>
              <h5>Episodes:</h5>
              <this.EpisodeList episodes={character.episode} />
            </div>
            <hr />
            <footer className="is-center">
              <p className="text-grey">
                {' '}
                <strong>Origin</strong> :{' '}
                {character.origin ? character.origin.name : ''}
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
