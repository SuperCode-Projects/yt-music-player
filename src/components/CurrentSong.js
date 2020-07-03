import React, { Component } from "react";

const CurrentSong = () => {
    return ( 
     <div className="CurrentSong">
        <div>
            <video src="https://www.youtube.com/watch?v=6M6samPEMpM"></video>
        </div>
        <div className="controls">
            <img src="public/icons8-fast-backward-50.png"></img>
            <img src="public/icons8-play-button-circled-50.png"></img>
            <img src="public/icons8-fast-forward-50.png"></img>
        </div>
        <div className="NowPlaying">
            <p>The Backstreet Boys - Everyboday</p>
        </div>

     </div>


     );
}
 
export default CurrentSong;