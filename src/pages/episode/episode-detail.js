import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { httpCartoonService } from '../_services/http-cartoon.service';

export default class EpisodeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: {},
      characters: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getEpisode();
  }

  async getEpisode() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.id;
    await httpCartoonService.getOne(`episode/${id}`).then(
      res => {
        this.createCharacterList(res.characters);
        this.setState({
          episode: res,
          isLoading: false,
        });
      },
      error => {
        console.log('error', error);
        this.setState({ isLoading: false, error: error });
      }
    );
  }

  async createCharacterList(urlArray) {
    const characterIdArray = [];

    urlArray.map(char => {
      const getNum = char.split('/');
      const num = getNum[getNum.length - 1];
      return characterIdArray.unshift(parseInt(num, 10));
    });

    const response = await fetch(
      'https://rickandmortyapi.com/api/character/' + characterIdArray
    );
    const res = await response.json();
    this.setState({
      characters: res,
      isLoading: false,
    });
  }

  CharacterList(props) {
    if (props.characters) {
      const listItems = props.characters.map((item, i) => (
        <li className="col-3" key={i}>
          <div className="card">
            <Link to={'/character/' + item.id}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  height: '80px',
                  margin: '0 auto',
                  borderRadius: '50%',
                }}
              />
              <p>{item.name}</p>
            </Link>
          </div>
        </li>
      ));

      return <ul>{listItems}</ul>;
    }
    return '';
  }

  render() {
    const { episode, characters, error, isLoading } = this.state;
    if (error) {
      return <p>{error.error}</p>;
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
    if (!episode.characters) {
      return null;
    } else {
      return (
        <div className="container">
          <div>
            <div className="card is-text-center" key={episode.id}>
              <header>
                <h4 className="text-primary ">{episode.name}</h4>
                <p>
                  On Air: {episode.air_date} | Season: {episode.episode}
                </p>
                <br />
                <hr />
              </header>
              <div>
                <h5>
                  This episode have{' '}
                  {episode.characters ? episode.characters.length : ''}{' '}
                  Characters:
                </h5>
                <ul className="row">
                  <this.CharacterList characters={characters} />
                </ul>
              </div>
              <hr />
              <footer className="is-center">
                <p className="text-grey">
                  <strong>Created</strong> : {episode.created}
                </p>
              </footer>
            </div>
          </div>
        </div>
      );
    }
  }
}
