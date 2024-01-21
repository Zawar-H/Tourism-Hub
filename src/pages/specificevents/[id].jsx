import React, { useState } from "react";
import Dropdown from "../../components/dropdown";
import Eventmap from "@/components/eventmap";
import useStrapiCollectionEntry from "@/util/useStrapiCollectionEntry";
import Link from "next/link";

export default function specificEvents(props) {
  const [open, setOpen] = useState(false);

  const {entry : event} = useStrapiCollectionEntry("events", props.id);
  if (!event){
    return <><div>Loading...</div></>
  }

  const title = event.eventTitle;
  const time = event.eventTime;
  const summary = event.eventSummary;
  const description = event.eventDescription;
  const date = event.eventDate;
  const details = event.eventDetails;
  const instructor = event.EventInstructorname;
  const instuctorinfo = event.eventInstructordescription;
  const duration = event.eventDuration;
  const coordinate = event.eventCoordinate;
  const instructorimg = event.eventInstructorimg.data[0].attributes.url;

  console.log(event)
  


  const faqItems = [
    {
      question: "Who can participate in this workshop?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What are the prerequisites for joining this workshop?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Can I interact with the host at the workshop?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Is it a pre-recorded or live workshop?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  if (!event) {
    return (
      <>
        <div className="subheading2">Job not found</div>
      </>
    );
  } else {
    return (
    
      <section className="specificevent">
        <Eventmap coordinate = {coordinate}/>
  
        {/* undermap section */}
        <div className="undermap">
          <div className="left">
            <p className="undereventstext">
              <span className="greentext">Date</span> {date}
            </p>
            <p className="undereventstext">
              <span className="greentext">Time</span> {time}
            </p>
            <p className="undereventstext">
              <span className="greentext">Duration</span> {duration}
            </p>
          </div>
  
          <div className="right">
            <p className="undereventstext">
              Price <span className="greentext">FREE</span>
            </p>
            <Link href="/checkout">
            <button className="btn">Register</button>
            </Link>
          </div>
        </div>
  
        {/* event info */}
  
        <div className="infosec">
          <div className="infoleft">
            <h1 className="subheading2">{title}</h1>
            <h2 className="infotext">{summary}</h2>
  
            <div className="infoleft2">
              <img className="instructorpic" src={instructorimg} alt="" />
              <h2 className="instructorname">{instructor}</h2>
  
              <h3 className="inst">Posted 1 month ago</h3>
            </div>
  
            {/* event includes section */}
            <div className="includes">
              <h2 className="greensub2">This event includes</h2>
  
              <div className="includes2">
                <p>👍🏻 Direct interaction with the instructor</p>
                <p>🖥 Access on mobile and web</p>
              </div>
  
              <div className="includes2">
                <p>🎥 Session recording after the workshop</p>
                <p>⌛️ 1 hour live session</p>
              </div>
            </div>
          </div>
  
          <div className="infobox">
            <div className="box1">
              <img
                className="instructorpic"
                src={instructorimg}
                alt="event instructor picture"
              />
  
              <p className="instructorname">
                {instructor} <br /><span className="inst">@{instructor}</span>{" "}
              </p>
  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <circle cx="25" cy="25" r="25" fill="#005836" />
                <line
                  x1="25.6426"
                  y1="17.5"
                  x2="25.6426"
                  y2="33.5"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <line
                  x1="33.5"
                  y1="25.6426"
                  x2="17.5"
                  y2="25.6426"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
  
            <p className="infotext">
              {instuctorinfo}
            </p>
          </div>
        </div>
  
        <div className="eventtext">
          <h2 className="greensub2">About the workshop</h2>
          <p className="infotext">
            {description}
          </p>
  
          <h3 className="green" onClick={() => setOpen(!open)}>
            read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path
                d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
                fill="#005836"
              />
            </svg>
          </h3>
  
          {open && (
            <>
              <p className="infotext">
              <br />
                {details}
              </p>
              
            </>
          )}
        </div>
  
        <div className="FAQ">
          <div className="faqtext">
            <h1 className="greensub2">Frequently Asked Questions</h1>
            <h2>Find all your answers related to this event.</h2>
          </div>
  
          {faqItems.map((item, index) => (
            <Dropdown key={index} question={item.question} answer={item.answer} />
          ))}
  
          <h1 className="greensub2">
            <span className="greensub3">
              Don't see the answer you're looking for?
            </span>{" "}
            Contact Us!
          </h1>
          <h2 className="askustext">
            Your question might be answered by the host, speakers, or
            NiagaraBenchlands Team.
          </h2>
          <input
            className="faqinput"
            type="text"
            placeholder="Please submit your questions"
          />
          <button className="btn">Post</button>
        </div>
      </section>
    );
  }
}

export function getServerSideProps(ctx) {
  return {
    props: {
      id: ctx.params.id,
    },
  };
}
