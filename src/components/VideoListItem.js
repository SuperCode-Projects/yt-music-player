import React, { Component } from "react";
import YouTube from 'react-youtube';
import { ytkey } from "./key";
import PlayerControls from "./Controls";


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",
            videos: []
        }
        this.handleVideoClicked = this.handleVideoClicked.bind(this);
    }

    handleVideoClicked() {
        this.props.activeVideo(this.props.item);
    }
    
    render() {
        return (
            <div className="SearchlistItems">
                <a href="#" onClick={this.handleVideoClicked}>
                <img src={this.props.item.snippet.thumbnails.default.url} alt="image"/> 
                <>{this.props.item.snippet.title}</>
                </a>
            </div>
        );
    }
};
 
export default Video;