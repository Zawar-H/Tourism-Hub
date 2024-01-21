import React from "react";
import Link from "next/link";

export default function eventcard(props) {
  
  const month = props.event.eventMonth;
  const day = props.event.eventDay;
  const title = props.event.eventTitle;
  const img = props.event.eventImage.data.attributes.url;
  const address = props.event.eventAddress;

  return (
    <section className="event-card">
    <div>
      <img src={img} alt="Event Image" className="event-image" />
      <div className="event-details">
        <div className="event-date">{month} <span className>{day}</span></div>
        <div className="event-text">
          <h2 className="event-title">{title}</h2>
          <p className="event-description">
            {address}
          </p>
        </div>
      </div>
    </div>

    <div className="bottom">
      
    <Link className = "NVsi" href="signin2">
      <button>Register</button>
    </Link>

    <Link className = "NVsu" href={`/specificevents/${props.event.id}`}>
      <button>View info</button>
    </Link>
    </div>
    </section>
  );
}
