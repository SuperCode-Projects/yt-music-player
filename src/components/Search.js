import React, { Component } from "react";
import { ytkey } from "./key";

import searchYoutube from 'youtube-api-v3-search';

import './Search.css';


class Search extends Component{
        constructor(props) {
        super(props)
          this.state = {
            q: "",
            results: []
          }
        }
        HandleInputChanged = (e) => {
          this.setState({q: e.target.value})
        }
        async HandleSearchClicked(e){
          const result = await searchYoutube({ytkey}, { q: this.state.q });
          this.setState({results: result.items})
          console.log(result)
        }
        render() {
          return (<div>
            <input onChange={this.HandleInputChanged} />
            <button onClick={this.HandleSearchClicked}>Search</button>
            {/* {
          this.state.results.map(item => <SearchListItem name={item.name} />)
            } */}
            
          </div>)
        }
      }


export default Search;