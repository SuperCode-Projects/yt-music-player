import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import Lyrics from "./components/Lyrics";
import Events from "./components/Events";
import Navbar from './components/Navbar';
import NextUp from './components/NextUp';
import CurrentSong from './components/CurrentSong';

class App extends Component {
  constructor() { 
    super()
    this.state = {
      currentVideo: "6M6samPEMpM"
    }
    this.handleVideoClicked = this.handleVideoClicked.bind(this);
  }

  handleVideoClicked(videoId) {
    this.setState({ currentVideo: videoId });
    console.log("current video state", videoId);
  }

  render() {

    return (
      <BrowserRouter>
    <div className="App">
      <div className="ControlBox">
			<CurrentSong videoId={this.state.currentVideo} />
      <div className="NextUp">
	  		<NextUp />
	  	</div>
      </div>
    <div className="navigation">
      <Navbar />
      <Switch>
					<Route exact path="/Search">
              <Search activeVideo={this.handleVideoClicked} foo={"bar"}/>
					</Route>
					<Route path="/lyrics" exact>
						<Lyrics />
					</Route>
          <Route path="/events" exact>
            <Events />
          </Route>
				</Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
