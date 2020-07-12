import React, { Component } from "react";
import EventList from "./EventList";
import { Link } from "react-router-dom";

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
        this.setState({ events: result._embedded.events });
        console.log(this.state.events)
      });
  }
  render() {
    return (
      <>
        <button id="EventsBtn" onClick={this.getEvents}>Get Events</button>
        <Link id="goBackBtn" to="/">Go Back</Link>
        <div id="Events">
        {
            this.state.events?.map(event =><EventList event={event}/>) 
        }
        </div>
      </>
    );
  }
}

export default Events;
