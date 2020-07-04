import React from "react";

import './CurrentSong.css';

const CurrentSong = () => {
    return ( 
     <div className="CurrentSong">
        <div>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/6M6samPEMpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="Controls">
            <img className="Button" id="Backwards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
            <img className="Button" id="Play" src="icons8-play-button-circled-50.png" alt="playButton"></img>
            <img className="Button" id="Forewards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
        </div>
        <div className="NowPlaying">
            <p id="artist">The Backstreet Boys</p>
            <p id="Song">- Everybody</p>
        </div>
        <hr class="solid"></hr>
     </div>



     );
}
 
export default CurrentSong;