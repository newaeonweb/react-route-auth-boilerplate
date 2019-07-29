import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as CharacterAction from './_store/actions';
import './character.css';

class CharacterDetail extends Component {
  componentDidMount() {
    this.getCharacterDetail();
  }

  getCharacterDetail() {
    const id = this.props.match.params.id;
    this.props.action.getOneCharacter(id);
  }

  EpisodeList(props) {
    const episodes = props.episodes;
    if (episodes) {
      const episodeList = episodes.map((episode, i) => {
        const getNum = episode.split('/');
        const num = getNum[getNum.length - 1];
        const episodeNumber = parseInt(num, 10);
        return (
          <li key={i}>
            <Link to={'/episode/' + episodeNumber}>
              Episode: {episodeNumber}
            </Link>{' '}
          </li>
        );
      });

      return <ul>{episodeList}</ul>;
    }
    return '';
  }

  render() {
    const { characterItem, error, isLoading } = this.props.character;

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
              <h4 className="text-primary ">{characterItem.name}</h4>
              <img src={characterItem.image} alt="" />
              <p>
                Status: {characterItem.status} | Species:{' '}
                {characterItem.species} | Gender: {characterItem.gender}
              </p>
              <br />
              <hr />
            </header>
            <div>
              <h5>Episodes:</h5>
              <this.EpisodeList episodes={characterItem.episode} />
            </div>
            <hr />
            <footer className="is-center">
              <p className="text-grey">
                {' '}
                <strong>Origin</strong> :{' '}
                {characterItem.origin ? characterItem.origin.name : ''}
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

// export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
  info: PropTypes.object,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  character: state.character,
});

const mapActionToProps = dispatch => ({
  action: bindActionCreators(CharacterAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(CharacterDetail);
