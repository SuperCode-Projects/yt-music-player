  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Lyrics from "./Lyrics";
import Events from "./Events";

const Navbar = () => (
    <nav>
       <Link to="Search">
        <h2>Search</h2>  
        </Link>
        <Link to="Lyrics">
        <h2>Lyrics</h2>
        </Link>
        <Link to="Events">
        <h2>Events</h2>
        </Link>
    </nav>
)


export default Navbar;