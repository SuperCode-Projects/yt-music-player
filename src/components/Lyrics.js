import React, { Component } from "react";

import { Link } from "react-router-dom";
import { musixmatchkey } from "./key";
import "./Lyrics.css";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      lyrics: "",
    };
    this.getLyrics = this.getLyrics.bind(this);
  }

  getLyrics() {
      let [artist, track] = this.props.video?.snippet?.title.split("-")
      console.log(artist,track)
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_artist=${artist}&q_track=${track}&apikey=${musixmatchkey}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ lyrics: result.message.body.lyrics.lyrics_body });
      });
  }

  render() {
    return (
      <>
        <button  id= "getLyricsBtn" onClick={this.getLyrics}>get Lyrics</button>
        <Link id="goBackBtn" to="/">Go Back</Link>
        <div className="lyricsBody">
          <p>{this.state.lyrics}</p>
        </div>
      </>
    );
  }
}

export default Lyrics;
