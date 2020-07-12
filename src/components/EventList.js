import React, { Component } from "react";

import "./EventList.css";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      events: [],
    };
    this.handleEventClicked = this.handleEventClicked.bind(this);
  }

  handleEventClicked() {}

  render() {
    return (
      <div className="SearchlistEvents">
        <a href={this.props.event.url} target="_blank">
          {this.props.event.name}
        </a>
        <div>
          <img id="concert" src="concert.jpg"/>
          </div>
        {/* <a href="#" onClick={this.handleEventClicked}>
                <img src={this.props.item.events.images[0]} alt="image"/> 
                <>{this.props.item.discovery.v2.events.name}
                {this.props.item.discovery.v2.events.start.localDate}
                {this.props.item.discovery.v2.events.place.city.name}
                {this.props.item.discovery.v2.events.place.country.stateCode}</>
                </a> */}
      </div>
    );
  }
}

export default EventList;
