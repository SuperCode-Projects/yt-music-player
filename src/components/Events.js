  
import React, { Component } from "react";

import './Events.css';

import { Ticketmasterkey } from "./key";
import { render } from "@testing-library/react";


class Events extends Component {
    constructor(props) {
    super(props);
    this.state = {
        q: "",
        events: []
    } }
getEvents() {
   /*  fetch(
        'https://app.ticketmaster.com/discovery/v2/events.json?apikey={ticketmasterkey}'
    )
    .then((response) => response.json())
    .then((reslut) =>{
        console.log(result);
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
}





export default Events;