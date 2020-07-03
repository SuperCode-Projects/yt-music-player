  
import React, { Component } from "react";

const Navbar = () => (
    <div>
         <Link to = "/Search">
        <button>Search</button>
        </Link>
        <Link to = "/lyrics">
        <button>Lyrics</button>
        </Link>
        <Link to = "/events">
        <button>Events</button>
        </Link>
    </div>
)


export default Navbar;