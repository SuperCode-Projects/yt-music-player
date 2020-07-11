  
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { musixmatchkey } from "./key";
import './Lyrics.css';



class Lyrics extends Component {
    constructor(props){
    super(props)
    this.state = {
        q:"",
        lyrics: []
    }};

    componentDidMount() {
        fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.result.id}&apikey=${musixmatchkey}`)
        .then(res => {
            let lyrics = result.data.message.body.lyrics;
            this.setState({lyrics: lyrics.item})
        } 
        )
    };
        
    
render() {
    return(
<>
<Link to = "/">Go Back</Link>
<div className="lyricsBody">
    <p>{this.state.lyrics.lyrics_body}</p>
</div>
</>
    );
        
    }
        };

    


export default Lyrics;