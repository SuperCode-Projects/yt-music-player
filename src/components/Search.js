import React, { Component } from "react";
import { ytkey } from "./key";

import './Search.css';


    class Search {
        constructor(props) {
          this.state = {
            q: "",
            results: []
          }
        }
        HandleInputChanged(e) {
          this.setState({q: e.target.value})
        }
        async HandleSearchClicked(e) {
          let result = await searchYoutube(ytkey, { q: this.state.q });
          this.setState({results: result.items})
        }
        render() {
          return (<div>
              console.log(result)
            <input onChange={this.HandleInputChanged} />
            <button onClick={this.HandleSearchClicked}>Search</button>
          </div>)
        }
      }


export default Search;