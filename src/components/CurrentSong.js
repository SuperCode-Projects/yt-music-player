import React from "react";

import './CurrentSong.css';

const CurrentSong = () => {
    return ( 
     <div className="CurrentSong">
        <div>
            <video className="video" src="https://www.youtube.com/watch?v=6M6samPEMpM" alt="video">Video</video>
        </div>
        <div className="controls">
            <img src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
            <img src="icons8-play-button-circled-50.png" alt="playButton"></img>
            <img src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
        </div>
        <div className="NowPlaying">
            <p>The Backstreet Boys - Everybody</p>
        </div>
     </div>


     );
}
 
export default CurrentSong;