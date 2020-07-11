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
      /* currentVideo: "6M6samPEMpM" */
      currentVideo: "",
      showBox: true
    }
    this.handleVideoClicked = this.handleVideoClicked.bind(this);
  }

  handleVideoClicked(item) {
    this.setState({ currentVideo: item });
    console.log("current video state", item);
  }

  render() {

    return (
      <BrowserRouter>
    <div className="App">
      <div className="ControlBox">
			<CurrentSong video={this.state.currentVideo} />
      <div className="NextUp">
	  		<NextUp />
	  	</div>
      </div>
    <div className="navigation">
      <Navbar />
      <Switch>
					<Route exact path="/">
              <Search activeVideo={this.handleVideoClicked} foo={"bar"}/>
					</Route>
					<Route path="/lyrics" exact>
						<Lyrics video={this.state.currentVideo}/>
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
