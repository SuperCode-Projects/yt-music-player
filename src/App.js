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
    <BrowserRouter>
    <div className="App">
		<div className="ControlBox">
			<CurrentSong />
      </div>
      <div class="NextUp">
	  		<NextUp />
	  	</div>
    <div className="navigation">
      <h1>Navbar</h1>
      <Navbar />
      <Switch>
					<Route exact path="/search">
						<Search />
					</Route>
					<Route path="/lyrics" exact>
						<Lyrics />
					</Route>
          <Route path="/events" exact>
            <Events />
          </Route>
				</Switch>
      <Search />
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
