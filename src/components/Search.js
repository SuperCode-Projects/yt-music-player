import React from "react";

import '/Search.css';

const Search = () => (
    <section>
        <form>
  <label for="name"></label>
  <input type="text" id="name" name="name" placeholder="Type in the artists name"></input>
  <img src="images/zoom-in.png"></img>
      </form>
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
              <h2>The Weeknd - I feel it comming</h2>
              <p>The Weeknd</p>
             </article>
         </div>
    </section>
)


export default Search;