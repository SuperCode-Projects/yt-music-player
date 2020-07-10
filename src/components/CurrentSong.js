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
                {/* <iframe src={"https://www.youtube.com/embed/" + props.videoId} autoplay frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe> */}
        </div>
        <div id="Controls">
            <img className="Button" id="Backwards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
            <img className="Button" id="Play" src="icons8-play-button-circled-50.png" alt="playButton"></img>
            <img className="Button" id="Forward" src="icons8-fast-forward-50.png" alt="backwardsIcon" ></img>
        </div>
        <div className="NowPlaying">
        <p>BSB</p>
            <p>- Everybody</p>
        </div>
     </div>
     );
}
 
export default CurrentSong;