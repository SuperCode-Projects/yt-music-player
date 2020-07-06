import React, { Component } from "react";
import { ytkey } from "./key";

import searchYoutube from 'youtube-api-v3-search';

import './Search.css';

// 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=$[ytkey]'

<<<<<<< HEAD

    class Search extends Component {
        constructor(props) {
          super(props);
=======
class Search extends Component{
        constructor(props) {
        super(props)
>>>>>>> c69ca685ba410f35a687ea16d783af09e22b9916
          this.state = {
            q: "",
            results: []
          }
         this.HandleInputChanged = this.HandleInputChanged.bind(this); 
         this.HandleSearchClicked = this.HandleSearchClicked.bind(this); 
        }
        HandleInputChanged = (e) => {
          this.setState({q: e.target.value})
        
        }
        async HandleSearchClicked(e){
          let result = await searchYoutube(ytkey, { q: this.state.q });
          this.setState({results: result.items})
          console.log(result);
        }
        render() {
          return (<div>
            <input onChange={this.HandleInputChanged} />
            <button onClick={this.HandleSearchClicked}>Search</button>
<<<<<<< HEAD
            {
        this.state.results.map(item => <p>{item.snippet.title}</p>)
      }
=======
            
>>>>>>> c69ca685ba410f35a687ea16d783af09e22b9916
          </div>)
        }
      }


export default Search;