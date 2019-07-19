import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacters } from './_store/actions';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   info: {},
    //   characterList: [],
    //   isLoading: false,
    //   error: null,
    // };
  }

  componentWillMount() {
    // this.getCharacters();
    // this.getListCharacters();
    this.props.getCharacters();
  }

  async getCharacters() {
    this.setState({ isLoading: true });
    const apiUrl = 'https://rickandmortyapi.com/api/character/';
    const response = await fetch(apiUrl);
    const res = await response.json();
    console.log(res);
    this.setState({
      info: res.info,
      characterList: res.results,
      isLoading: false,
    });
  }

  getListCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/';
    this.setState({ isLoading: true });
    return fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data =>
        this.setState({
          info: data.info,
          characterList: data.results,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      characterList,
      info,
      errorMessage,
      isLoading,
    } = this.props.character;
    console.log(this.props.character);
    if (errorMessage) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="is-center">{errorMessage}</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {isLoading ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="is-center">Loading...</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" style={{ marginTop: 10 }}>
            <div className="row">
              <div className="col">
                <p className="is-center">
                  Characters found: {info.count} | Pages: {info.pages}
                </p>
              </div>
            </div>
            <div className="row">
              {characterList.map(char => (
                <div
                  className="card is-text-center col-6 col-4-md col-3-lg"
                  key={char.id}
                >
                  <header>
                    <h4>
                      <Link to={'/character/' + char.id}>{char.name}</Link>
                    </h4>
                  </header>
                  <img className="img-fluid" src={char.image} alt={char.name} />
                  <p>
                    <span className="tag">Status: {char.status}</span>
                    <span className="tag">Species: {char.species}</span>
                  </p>
                  <footer className="is-center">
                    <p>
                      Origin:{' '}
                      <span className="text-grey">{char.origin.name}</span>
                    </p>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

CharacterList.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  character: state.character,
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterList);
