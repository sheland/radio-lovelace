import PropTypes from 'prop-types'
import React, { Component } from 'react';

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables...unpack props
// See https://wesbos.com/destructuring-objects/

//const Track = (props)
//returns props w/ css & checkbox, buttons-switching, top,
//new prop added -> favorite = props.favorite
class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }
  //toggles
  onChangeFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  }

  handleTopclick = () => {
    this.props.topCallback(this.props.index, this.props.playlist)
  }

  render() {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
        <h3 className="track--title">{this.props.title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={!this.state.favorite}
          onChange={this.onChangeFavorite}
        />
        <p className="track--artist">{this.props.artist}</p>
        <p className="track--playtime">{this.props.playtime}</p>
        <button
          className="track--control track--to-top"
          onClick ={this.handleTopclick}

          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          >
          <span role="img" aria-label="switch lists">↔</span>
        </button>
      </li>
    );

  };

};


Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
  topCallback: PropTypes.func,
  index: PropTypes.number,
  playlist: PropTypes.string,
}

export default Track;
