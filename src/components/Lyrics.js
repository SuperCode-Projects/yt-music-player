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
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_artist=Michael%20Jackson&q_track=Thriller&apikey=${musixmatchkey}`
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
        <button onClick={this.getLyrics}>get Lyrics</button>
        <Link to="/">Go Back</Link>
        <div className="lyricsBody">
          <p>{this.state.lyrics}</p>
        </div>
      </>
    );
  }
}

export default Lyrics;
