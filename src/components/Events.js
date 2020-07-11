import React, { Component } from "react";
import EventList from "./EventList"

import "./Events.css";

import { TicketmasterKey } from "./key";
import { render } from "@testing-library/react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      events: [],
    };
    this.getEvents = this.getEvents.bind(this);
  }
  getEvents() {
    let [artist, track] = this.props.video?.snippet?.title.split("-");

    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TicketmasterKey}&keyword=${artist}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
<<<<<<< HEAD
        this.setState({ events: result._embedded.events });
        console.log(this.state.events)
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.getEvents}>Get Events</button>
        {
            this.state.events?.map(event => <EventList event={event}/>) 
        }
      </div>
    );
  }
=======
        this.setState({ events: result.discovery.v2.events.attractionId})
    }) */
}
    render() {
        return 
      /*   if (!this.result) {
            return (
                <div>Sorry, no events found</div>
            )}
        return (
            <button onClick={this.getEvents}>Get Events</button>
            this.state.results.map(item =>
                <img src = {item.discovery.v2.events.id.images} />
                {item.discovery.v2.events.attractionId}
                {item.discovery.v2.events.city}
                {item.discovery.v2.events.venueId}
                {item.discovery.v2.events.StartDateTime}
        )) */
    };
>>>>>>> 64d9ec094691566a05c091b67ed353ea7179dd5d
}

export default Events;
