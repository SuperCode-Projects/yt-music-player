import React, { Component } from "react";
import { ytkey } from "./key";

import searchYoutube from 'youtube-api-v3-search';
import Video from "./VideoListItem";
import SearchListItem from "./SearchListItem";

import './Search.css';

// 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=$[ytkey]'


    class Search extends Component {
        constructor(props) {
          super(props);
          this.state = {
            q: "",
            results: []
          }
         this.HandleInputChanged = this.HandleInputChanged.bind(this); 
         this.HandleSearchClicked = this.HandleSearchClicked.bind(this); 
         this.onClickVideoTile = this.onClickVideoTile.bind(this);
        }
        HandleInputChanged = (e) => {
          this.setState({q: e.target.value})
        
        }
        async HandleSearchClicked(e){
          let result = await searchYoutube(ytkey, { q: this.state.q });
          this.setState({results: result.items})
        }

        onClickVideoTile(videoId) {
          console.log("test", videoId, this.props);
          this.props.activeVideo(videoId);
      }
        render() {
          return (<div>
            <input  onChange={this.HandleInputChanged} />
            <button onClick={this.HandleSearchClicked}>Search</button>
            {
              this.state.results.map(item => <Video item={item} activeVideo={this.onClickVideoTile}/>
        )
      }
          </div>)
        }
      }


export default Search;