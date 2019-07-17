import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EpisodeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      episodeList: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getEpisodes();
  }

  async getEpisodes() {
    this.setState({ isLoading: true });
    const apiUrl = 'https://rickandmortyapi.com/api/episode/';
    const response = await fetch(apiUrl);
    const res = await response.json();
    console.log(res);
    this.setState({
      info: res.info,
      episodeList: res.results,
      isLoading: false,
    });
  }

  render() {
    const { episodeList, info, error, isLoading } = this.state;
    if (error) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="is-center">{error.message}</p>
            </div>
          </div>
        </div>
      );
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
      <div className="page">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="is-center">
                  Episodes found: {info.count} | Pages: {info.pages}
                </p>
              </div>
            </div>
            <div className="row">
              {episodeList.map((item, i) => (
                <div
                  className="card is-text-center col-6 col-4-md col-4-lg"
                  key={item.id}
                >
                  <header>
                    <h4>
                      <Link to={'/episode/' + item.id}>
                        #{i + 1} - {item.name}
                      </Link>
                    </h4>
                    <hr />
                    <p>
                      Season: <span className="text-grey">{item.episode}</span>
                    </p>
                  </header>
                  <footer className="is-center">
                    <p>
                      On air: <span className="text-grey">{item.air_date}</span>
                    </p>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodeList;
