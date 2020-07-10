import React from "react";
import YouTube from 'react-youtube';
import './CurrentSong.css';
import { render } from "@testing-library/react";

const CurrentSong = (props) => {
    return (
     <div className="CurrentSong">
            <div>
                <YouTube  autoplay videoId={props.videoId}/>
                {/* <iframe src={"https://www.youtube.com/embed/" + props.videoId} autoplay frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe> */}
        </div>
        <div className="Controls">
            <img className="Button" id="Backwards" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
            <img className="Button" id="Play" src="icons8-play-button-circled-50.png" alt="playButton"></img>
            <img className="Button" id="Forward" src="icons8-fast-forward-50.png" alt="backwardsIcon"></img>
        </div>
        <div className="NowPlaying">
<<<<<<< HEAD
            <p id="artist">{props.title}</p>
=======
        <p>{props.items}</p>
>>>>>>> b8b2081447d971cd78e933c192e71756f81b3449
            <p id="Song">- Everybody</p>
        </div>
     </div>
     );
}
 
export default CurrentSong;