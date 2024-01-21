import React from "react";
import Eventcard from "@/components/eventcard";
import useStrapiCollection from "@/util/useStrapiCollection";

export default function events() {

  const { collection: events } = useStrapiCollection("events")

  return (
    <section className="events">
      <div className="home-hero">
        <div className="background-image"></div>
        <div className="content">
          <img src="/home-hero2.jpg" alt="Left Image" className="left-image" />
          <div className="text">
            <h1>Explore Niagara Benchlands - Your Gateway to Adventure!</h1>
            <p>
              Your gateway to adventure, where every path leads to new
              discoveries and excitement!
            </p>
            <div className="btn-wrapper">
              <button className="light-green-btn">
                <p>Get Tickets</p>
              </button>
              <button className="hollow-btn">
                <p>Learn More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <h1 className="subheading">Upcoming Events</h1>
        <div className="events-wrapper">
          {
            events && events.map(event => <Eventcard event = {event}/> )
          }
          {
            events && events.map(event => <Eventcard event = {event}/> )
          }
        </div>
        {/* create event section */}
        <div className="create-event">
          <div className="create-event-img">
            <img src="/events-separator.png" alt="" />
          </div>
          <div className="create-event-text">
            <h1 className="event-title">Make Your Own Event</h1>
            <p className="event-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="light-green-btn events-lg-btn">Create Events</button>
          </div>
        </div>
        {/* green bar section */}
        <div class="green-bar">
          <p class="centered-text">
            Escape to Paradise - Visit{" "}
            <span class="underline">Niagara Benchlands</span> Today
          </p>
        </div>
        <div className="events-wrapper">

        {
            events && events.map(event => <Eventcard event = {event}/> )
          }
        <button className="hollow-btn events-hollow-btn">Load More</button>
        </div>
      </div>
    </section>
  );
}
