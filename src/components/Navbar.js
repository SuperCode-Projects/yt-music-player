  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Lyrics from "./Lyrics";
import Events from "./Events";
import './Navbar.css';

const Navbar = () => (
    <nav>
       <Link to="/">
        <h3>Search</h3>  
        </Link>
        <Link to="Lyrics">
        <h3>Lyrics</h3>
        </Link>
        <Link to="Events">
        <h3>Events</h3>
        </Link>
    </nav>
)


export default Navbar;