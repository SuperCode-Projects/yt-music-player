  
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import Lyrics from "./Lyrics";
import Events from "./Events";

const Navbar = () => (
    <BrowserRouter>
    <nav className="navbar">
       <Link to="Search">
        <h2>Search</h2>  
        </Link>
        <Link to="Lyrics">
        <h2>Lyrics</h2>
        </Link>
        <Link to="Events">
        <h2>Events</h2>
        </Link>
        <Switch>
            <Route exact path="/">
                <Search />
            </Route>
            <Route exact path="/Lyrics">
                <Lyrics />
            </Route>
            <Route exact path="/Events">
                <Events />
            </Route>
        </Switch> 

    </nav>
    </BrowserRouter>
)


export default Navbar;