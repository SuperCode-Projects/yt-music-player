import React from "react";
import YouTube from 'react-youtube';
import './CurrentSong.css';
import { render } from "@testing-library/react";
import PlayerControls from "./Controls.js";

const CurrentSong = (props) => {
    return (
     <div className="CurrentSong">
            <div>
                <YouTube  autoplay videoId={props.videoId}/>
        </div>
        <PlayerControls />
        <div className="NowPlaying">
        {props.channelTitle}
        <p>- Everybody</p>
        </div>
     </div>
     );
}
 
export default CurrentSong;