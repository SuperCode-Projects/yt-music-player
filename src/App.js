import React from 'react';
import './App.css';
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import Events from "./components/Events";




function App() {
  return (
    <div className="App">
      		<BrowserRouter>
			<div>
				<nav>
					<h1>YT Music Player</h1>
				</nav>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
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
			</div>
		</BrowserRouter>
    </div>
  );
}

export default App;
