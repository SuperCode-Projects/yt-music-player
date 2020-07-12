import React from "react";
import YouTube from 'react-youtube';
import './CurrentSong.css';
import { render } from "@testing-library/react";
import PlayerControls from "./Controls.js";
import src from "youtube-api-v3-search";

const CurrentSong = (props) => {
    return (
     <div className="CurrentSong">
            <div>
    {props.video ? <YouTube  autoplay videoId={props.video.id.videoId}/> : <img id="defaultImage" src="./images/blaz-photo-cZWZjymwI9o-unsplash.jpg"/>} 
        </div>
        <PlayerControls />
        <div className="NowPlaying">
    <p>{props.video?.snippet?.title}</p>
        </div>
     </div>
     );
}
 
export default CurrentSong;