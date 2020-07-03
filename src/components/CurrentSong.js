import React from "react";

import './CurrentSong.css';

const CurrentSong = () => {
    return ( 
     <div className="CurrentSong">
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6M6samPEMpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="Controls">
            <img className="Backwards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
            <img className="Play" src="icons8-play-button-circled-50.png" alt="playButton"></img>
            <img className="Forewards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
        </div>
        <div className="NowPlaying">
            <p>The Backstreet Boys - Everybody</p>
        </div>
     </div>


     );
}
 
export default CurrentSong;