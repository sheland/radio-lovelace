import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends Component {
  //props = {tracks: Array(86)
  //intialize states of morning/evening sides
  constructor(props) {
    super(props);
    this.state = {
      morningSide: props.tracks.slice(0, props.tracks.length / 2),
      eveningSide: props.tracks.slice(props.tracks.length / 2, props.tracks.length),
    };
  }

    onIconClick = (index, playlist) => {
      if(playlist == "morningSide") {
        const song = this.state.morningSide[index];
        console.log(song);
        console.log(song.favorite);

        if(song.favorite == undefined || song.favorite == false) {
          song.favorite = true;
        }
        else {
          song.favorite = false;
        }
      }


      if(playlist == "eveningSide") {
        const song = this.state.eveningSide[index];
    };
        console.log(song);
        console.log(song.favorite);
    };
  };

  render() {
    this.onIconClick(index, "morningSide");
    console.log(`Radio set for ${this.state} tracks`);
  // const playlists = {
  //   morningTracks: props.tracks.slice(0, props.tracks.length / 2),
  //   eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  // };


    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningSide}
            favoriteCallback={this.onIconClick}
            />
          <Playlist
            side="Evening"
            // tracks={playlists.eveningTracks}
            tracks={this.state.eveningSide}
            favoriteCallback={this.onIconClick}

          />
        </section>
      </div>
    );
  }
}

RadioSet.propTypes = {
  tracks: PropTypes.array.isRequired,
}

export default RadioSet;
