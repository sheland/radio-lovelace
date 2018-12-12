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
      index: props.tracks
    };

  }



  // onIconClick = (index, playlist) => {
  //   let song;
  //   if(playlist === "morningSide") {
  //     song = this.state.morningSide[index];
  //     console.log(song);
  //     console.log(song.favorite);
  //
  //     if(song.favorite === undefined || song.favorite === false) {
  //       song.favorite = true;
  //     } else {
  //       song.favorite = false;
  //     }
  //   }
  //
  //   if(playlist == "eveningSide") {
  //     song = this.state.eveningSide[index];
  //   };
  //
  //   console.log(song);
  //   console.log(song.favorite);
  // };

  //SendtoTop
  onChangeTop = (index, playlist) => {
    console.log(index, playlist);

    const track = playlist[index];
    playlist.splice(index, 1); //insert at index, delete no elements, insert 1
    playlist.unshift(track); //adds item in beginning of []

    const newState = {playlist, ...this.state}; //all props

    this.setState(newState);

    // let newTracks = this.state.tracks;
    // const topSong = newTracks.find(song.id;
    //
    // this.setState({tracks: newTracks});




  }

  render() {
    // this.onIconClick(index, "morningSide");
    // console.log(`Radio set for ${this.state} tracks`);
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
            onChangeTop={this.onChangeTop}
            playlist={"Morning"}
            />
          <Playlist
            side="Evening"
            // tracks={playlists.eveningTracks}
            tracks={this.state.eveningSide}
            onChangeTop={this.onChangeTop}
            playlist={"Evening"}

          />
        </section>
      </div>
    );
  }
}

// RadioSet.propTypes = {
//   tracks: PropTypes.array.isRequired,
// }

export default RadioSet;
