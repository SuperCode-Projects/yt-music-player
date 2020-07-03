import React from 'react';
import './App.css';
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import Events from "./components/Events";
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
					<h1>YT Music Player</h1>
	         <Navbar />
						<Search />
						<Lyrics />
						<Events />
    </div>
  );
}

export default App;
