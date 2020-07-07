  
import React, { Component } from "react";

import './Events.css';

import { Ticketmasterkey } from "./key";
import { render } from "@testing-library/react";


class Events extends Component {
    constructor(props) {
    super(props);
    this.state = {
        q: "",
        results: []
    } }

    async componentDidMount() {
        const url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=${Ticketmasterkey}";
        const response = await fetch(url);
        const data = await response.json();
        const output = q;
        this.setState({result: data.results.output[0]});
        console.log(data);
    }
    render() {
        if (!this.result.output) {
            return (
                <div>Sorry, no events found</div>
            )}
        return (
            this.state.results.map(item =>
            <div>
                <img src = {item.discovery.v2.events.id.images} />
                {item.discovery.v2.events.attractionId}
                {item.discovery.v2.events.city}
                {item.discovery.v2.events.venueId}
                {item.discovery.v2.events.StartDateTime}
            </div>
        ))
    };
}





export default Events;