import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

//caculates length of song
//(tracks) = JSON data
const calculatePlayTime = (tracks) => {
  let minutes = 0;
  let seconds = 0;

// track = {title: "Donna Lee", artist: "Charlie Parker", playtime: "2:37", albumart: "https://lastfm-img2.akamaized.net/i/u/174s/668c1f543c304144e1ec480208c30c4a.png", id: 78}

  tracks.forEach((track) => {
    const times = track.playtime.split(':');
    minutes += parseInt(times[0]);
    seconds += parseInt(times[1]);
  });
  //Math.floor round # downward to its nearest integer
  minutes += Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  //.padStart adds padding with "0"
  seconds = ("" + seconds).padStart(2, "0");
  minutes = ("" + minutes).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

//functional conponent
//props = {side: "Evening", tracks: Array(43)}
const Playlist = (props) => {
  const tracks = props.tracks;
  //# total tracks
  const trackCount = tracks.length;
  //length of time of all tracks
  const playtime = calculatePlayTime(tracks);
  const topCallback= props.topCallback;
  const playlist = props.playlist;
  const trackElements = tracks.map((track, i) => {
    const props = {title: track.title, artist: track.artist, playtime: track.playtime, albumart: track.albumart, topCallback: topCallback};
    // We use "spread syntax" here to pass in all the properties of
    // the variable 'track' as props. Go look it up!
    //passes the whole props object
    return (
      <Track
        key={i}
        index={i}
        playlist={playlist}
        {...props} />
        // console.log(<Track {...props} />,)
        // {...track}
    );
  });


  //Morning Playlist 43 tracks - 5:31:06
  //returns track with props
  return (
    <div className="playlist">
      <h2>{props.side} Playlist</h2>
      <p>
        {trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
}

Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
