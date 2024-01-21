import { NextSeo } from "next-seo";
import Eventcard from "@/components/eventcard";
import Sponsors from "@/components/sponsors";
import useStrapiCollection from "@/util/useStrapiCollection";
import Link from "next/link";

export default function Home() {
  const { collection: events } = useStrapiCollection("events");

  return (
    <section className="home">
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
              <Link href="/signin2">
                <button className="light-green-btn">
                  <p>Get Tickets</p>
                </button>
              </Link>
              <Link href="/about" className="hollow-btn">
                <button>
                  <p>Learn More</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* green bar */}
      <div class="green-bar">
        <p class="centered-text">
          Escape to Paradise - Visit{" "}
          <span class="underline">Niagara Benchlands</span> Today
        </p>
      </div>

      {/* Event Cards */}
      <div className="featured">
        <h3 className="subheading">Our Lastest Events</h3>
        <div className="events">
          {events && events.map((event) => <Eventcard event={event} />)}
        </div>
        <Link href="/events">
          <button className="dark-green-btn">View All Events</button>
        </Link>
      </div>

      {/* This is the section under the featured events section */}
      <div className="underevents">
        <div className="leftimg">
          <p className="winetext">
            Be The First To Hear About New Events. <br />{" "}
            <Link href="/signin2">
              <button className="slink" href="google.com">
                Sign Up
              </button>
            </Link>
          </p>
        </div>

        <div className="righttext">
          <h3 className="rc">Come join us!</h3>

          <h3 className="subheading">New tourism and destinations for you!</h3>

          <p className="normtext">
            Donec suscipit ante ipsum. Donec convallis quam at tortor hendrerit,
            ut elementum augue suscipit. Morbi tincidunt risus vel neque
            convallis pretium non nec justo.
          </p>

          <div className="fancyt">
            <p className="normtext">
              <span className="subheading2">
                Get access to our latest events
              </span>{" "}
              <br />
              Lorem Ipsum nibh vel velit auctor aliqu aenean sollic.
            </p>
          </div>

          <div className="fancyt">
            <p className="normtext">
              <span className="subheading2">
                Get access to our latest events
              </span>{" "}
              <br />
              Lorem Ipsum nibh vel velit auctor aliqu aenean sollic.
            </p>
          </div>
        </div>
      </div>
      <Link href="/signin2">
      <button className="dark-green-btn centered-text">Sign Up</button>
      </Link>
      {/* End of under the events section */}
      <Sponsors />
      {/* end of final section */}
    </section>
  );
}
