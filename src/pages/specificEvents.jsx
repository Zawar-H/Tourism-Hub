import React, { useState } from "react";
import Dropdown from "../components/dropdown";
import Eventmap from "@/components/eventmap";
import events from "./events";

export default function specificEvents() {
  
  const [open, setOpen] = useState(false);

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

  return (
    
    <section className="specificevent">
      <Eventmap event = {0}/>

      {/* undermap section */}
      <div className="undermap">
        <div className="left">
          <p className="undereventstext">
            <span className="greentext">Date</span> 25 Oct 2023
          </p>
          <p className="undereventstext">
            <span className="greentext">Time</span> 7:30 pm
          </p>
          <p className="undereventstext">
            <span className="greentext">Duration</span> 60 min
          </p>
        </div>

        <div className="right">
          <p className="undereventstext">
            Price <span className="greentext">FREE</span>
          </p>
          <button className="btn">Register</button>
        </div>
      </div>

      {/* event info */}

      <div className="infosec">
        <div className="infoleft">
          <h1 className="subheading2">Sunset Yoga & Wine Series At Kabaca</h1>
          <h2 className="infotext">Unwind, rejuvenate, and savor the serenity.</h2>

          <div className="infoleft2">
            <img className="instructorpic" src="eventinstructor.jpg" alt="" />
            <h2 className="instructorname">SoulCurryArt</h2>

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
              src="/eventinstructor.jpg"
              alt="event instructor picture"
            />

            <p className="instructorname">
              SoulCurryArt <span className="inst">@soulCurryart</span>{" "}
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
            Modern Cubist abstract artist, NFT artist, Art educator & bridging
            the Contemporary with the Digital art realms
          </p>
        </div>
      </div>

      <div className="eventtext">
        <h2 className="greensub2">About the workshop</h2>
        <p className="infotext">
          Join us for an evening of harmony, connection, and the beauty of the
          Niagara Benchlands. Let the enchantment of Sunset Yoga & Wine at
          Kabaca Vineyards rejuvenate your spirit and leave you with cherished
          memories....
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
            <p className="eventinfo">
            <br />
              As the sun gracefully descends over the rolling vineyards, we
              invite you to embark on a journey of wellness and relaxation:
              <br /><br />
              Unwind amidst the breathtaking beauty of Kabaca Vineyards with our Sunset Yoga & Wine series. Immerse yourself in the serenity of the Niagara Benchlands as you flow through yoga, find tranquility in meditation, and savor Kabaca's finest wines. Watch the sun's golden descent over the vineyards, creating a perfect moment to connect with nature and new friends. Join us for this harmonious evening of wellness, wine, and wonder. Reserve your spot now and elevate your senses with Sunset Yoga & Wine at Kabaca.
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
