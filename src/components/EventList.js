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
          <>
            <img id="concert" src="concert.jpg" />
          </>
          {this.props.event.name}
        </a>
        Date: {this.props.event.dates.start.localDate}
         City: {this.props.event.dates.timezone}
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
