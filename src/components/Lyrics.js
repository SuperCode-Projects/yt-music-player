  
import React, { Component } from "react";

import { Link } from "react-router-dom";

import './Lyrics.css';



class Lyrics extends Component {
    constructor(props){
    super(props)
    this.state = {
        lyrics: []
    }};

    componentDidMount() {
        fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${musixmatchkey}`)
        .then(res => {
            let lyrics = res.data.message.body.lyrics;
            setLyrics({ lyrics })
        } 
        )
    };
        
    
render() {
    return(
<>
<Link to = "/">Go Back</Link>
<div className="lyricsBody">
    <p>{lyrics.lyrics.lyrics_body}</p>
</div>
</>
    );
        
    }
        }

    


export default Lyrics;