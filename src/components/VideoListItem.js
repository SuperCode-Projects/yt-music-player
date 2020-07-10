import React, { Component } from "react";
import YouTube from 'react-youtube';
import { ytkey } from "./key";


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
        this.props.activeVideo(this.props.item.id.videoId);
    }
    
    render() {
        return (
            <div className="SearchlistItems">
                <ul>
                <li>
                <a href="#" onClick={this.handleVideoClicked}>
                <img src={this.props.item.snippet.thumbnails.default.url} alt="image"/> 
                <>{this.props.item.snippet.title}</>
                </a>
                </li>
                </ul>
            </div>
        );
    }
};
 
export default Video;