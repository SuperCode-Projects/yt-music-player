import React, { Component } from "react";

import './Search.css';



const Search = () => (
    <section>
    <div id="input_container">
    <input type="text" id="input" placeholder="Type in the artists name"></input>
    <img src="images/zoom-in.png" id="input_img"></img>
    </div>

      <div className="songs">
          <article>
              <img src = "images/band1.jpg"></img>
              <h2>The Weeknd - Blinding Lights</h2>
              <p>The Weeknd</p>
             </article>
             <article>
              <img src = "images/band2.jpg"></img>
              <h2>The Weeknd - If your eyes</h2>
              <p>The Weeknd</p>
             </article>
             <article>
              <img src = "images/band3.jpg"></img>
              <h2>The Weeknd - I feel it coming</h2>
              <p>The Weeknd</p>
             </article>
         </div>
    </section>
)


export default Search;