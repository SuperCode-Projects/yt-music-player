import React, { Component } from "react";


class PlayerControls extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSong: "",
            songs: []
          }
        
          this.onClickPlayBtn = this.onClickPlayBtn.bind(this);
          }
    
        onClickPlayBtn(channelTitle,title,videoId) {
        console.log("NataliasTest",channelTitle, title,videoId,this.props);
        this.props.showArtist(this.props.item.snippet.channelTitle);
        this.props.showArtist(this.props.item.snippet.title);
    }
    render() {
        return (
        
        <div id="Controls">
        <img className="Button" id="Backwards" src="icons8-fast-forward-runde-50.png" alt="backwardsIcon"></img>
        <img className="Button" id="Play" src="icons8-wiedergabe-eingekreist-50.png" alt="playButton" onclick={this.onClickPlayBtn}></img>
        <img className="Button" id="Forward" src="icons8-fast-forward-runde-50.png" alt="backwardsIcon" ></img>
    </div>
    )
      }
}
 
export default PlayerControls;
