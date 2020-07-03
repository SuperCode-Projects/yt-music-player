import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import Events from "./components/Events";
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
      		<BrowserRouter>
			<div>
        <Navbar />
				<nav>
					<h1>YT Music Player</h1>
				</nav>
				<Switch>
       { /*
					<Route exact path="/search">
						<Search />
       </Route> */}
					<Route path="/lyrics" exact>
						<Lyrics />
					</Route>
          <Route path="/events" exact>
						<Events />
					</Route>
      </Switch>
			</div>
		</BrowserRouter>
    </div>
  );
}

export default App;
