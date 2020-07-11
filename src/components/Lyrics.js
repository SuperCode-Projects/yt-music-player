import React, { Component } from "react";

import { Link } from "react-router-dom";
import { musixmatchkey } from "./key";
import "./Lyrics.css";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      lyrics: [],
    };
  }

  getLyrics(){
    fetch(
        `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.result.id}&apikey=${musixmatchkey}`
      )
        .then((response) => response.json())
        .then((result) => console.log(result));
    }



  render() {
    return (
      <>
      <button onClick={this.getLyrics}>get Lyrics</button>
        <Link to="/">Go Back</Link>
        <div className="lyricsBody">
          <p>{this.state.lyrics.lyrics_body}</p>
    <p>{JSON.stringify(this.props.video)}</p>
        </div>
      </>
    );
  }
}

export default Lyrics;
