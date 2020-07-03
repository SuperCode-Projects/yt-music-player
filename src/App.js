import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import Events from "./components/Events";
import Navbar from './components/Navbar';
import NextUp from './components/NextUp';
import CurrentSong from './components/CurrentSong';





function App() {
  return (
    <div className="App">
		<div>
			<CurrentSong />
	  		<NextUp />
	  	</div>
    <div className="navigation">
      <Navbar />
      <Search />
    </div>
    </div>
  );
}

export default App;
