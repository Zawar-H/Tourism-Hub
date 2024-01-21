import React from "react";
import useStrapiCollection from "@/util/useStrapiCollection";
import strapiRequest from "@/util/strapiRequests";
import Link from "next/link";

export default function about({ aboutData }) {

  const { collection: events } = useStrapiCollection("events")
  console.log(events)
  console.log(aboutData)


  // if (!events || events.length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className="about">
      {/* about us top image section */}
      <div className="section1">
      <h1 className="title">
         {/* This is the example of the COLLECTION type, check the above code useStrapiCollection */}

       {/* {events[0]?.eventTitle} */}
       {aboutData.aboutTitle} 


      </h1>
        <p className="normaltext">
          {/* This is the example of the SINGLE type, check getServerSideProps at the bottom */}
          {aboutData.aboutDescription} 
          
        </p>
        <div className="horizontal">
        <Link href="/events">
          <button className="light-green-btn">View Events</button>
          </Link>
          <button className="hollow-btn">Learn more</button>
        </div>
      </div>

      {/* who we are section */}
      <div className="section2">
        {/* 3 block section */}
        <div className="blocksec">
          <p className="whowearetext">
            <span className="subheading2">Who we are</span> At the heart of
            Lincoln, Ontario, lies a new tourism and destination brand identity
            - the Niagara Benchlands. This visionary brand, passionately
            endorsed by our dedicated staff, Town Council, the tourism industry,
            and the community, is set to redefine our town's identity.
          </p>

        <img className="whoweareimg" src={aboutData.whoweare.data[0].attributes.url}/>


          <div className="whowearetext">
            <p className="subheading2">Core commitments</p>{" "}
            <ul className="commitmentlist">
              <li>Attract tourism investment and support job creation.</li>
              <li>Advocate for enhanced tourism support.</li>
              <li>
                Craft a distinctive Lincoln-centered destination that captivates
                visitors locally, nationally, and internationally.
              </li>
            </ul>
          </div>
        </div>

        {/* 3 block section */}
        <div className="blocksec">
        <img className="whoweareimg" src={aboutData.whoweare2.data[0].attributes.url}/>


          <p className="whowearetext">
            <span className="subheading2">Our Vision</span> We envision a future
            where the Niagara Benchlands shines as a beacon of hospitality and
            opportunity, a place where people are inspired to visit, live, work,
            and thrive. Our mission is to turn this vision into reality, shaping
            a community that celebrates its identity and embraces its potential.
          </p>

          <img className="whoweareimg" src={aboutData.whoweare3.data[0].attributes.url}/>

        </div>
      </div>

      {/* statistics section(section3) */}
      <div className="section3">
        {/* event by numbers */}
        <div className="statssection">
          <p className="normaltext">Statistics</p>
          <h2 className="subheading2">Events by the numbers.</h2>
          <p className="normaltext">
            <br />
            We take pride in our craft beverage heritage, value-added
            agriculture, wide-open spaces, and welcoming communities. We strive
            to highlight these distinctive attributes, setting us apart in the
            world of destinations.
          </p>
        </div>

        {/* hosted events */}
        <div className="statssection">
          <img className="abouticon" src="abouticon1.png" alt="icon1" />
          <h2 className="subheading2">
            {aboutData.hostedEvents} <br />
            Hosted Events
          </h2>
          <p className="normaltext">
            The Town of Lincoln takes immense pride in its vibrant and diverse
            calendar of events, each thoughtfully designed to celebrate our
            unique culture, heritage, and community spirit. These events not
            only serve as a source of joy and unity for our residents but also
            play a crucial role in attracting tourism to our picturesque region,
            under the banner of the Niagara Benchlands.
          </p>
        </div>

        {/* global brands */}
        <div className="statssection">
          <img className="abouticon" src="abouticon2.png" alt="icon2" />
          <h2 className="subheading2">
          {aboutData.globalBrands} <br /> Global Brands
          </h2>
          <p className="normaltext">
            At the Niagara Benchlands, we extend our heartfelt appreciation to
            our global brand partners and sponsors who stand as pillars of
            support, helping us bring the magic of the Niagara Benchlands to
            life. Their unwavering commitment and collaborative spirit have been
            instrumental in elevating our mission to showcase the beauty and
            vibrancy of Lincoln, Ontario, and its surrounding region.
          </p>
        </div>
      </div>

      {/* our team section */}
      <div className="section2">
        <div className="ourteamtext">
          <h1 className="subheading2">Our Team</h1>
          <p className="normaltext">
            Our success and the realization of our vision would not be possible
            without the unwavering dedication and commitment of our exceptional
            teams.
          </p>
        </div>

        {/* team images section */}
        <div className="teammembers">
          {/* team member img */}
          <div className="membersec">
            <img
              className="teammember"
              src="office worker.jpg"
              alt="female office worker"
            />

            <p className="normaltext">Jenna  <br />Founder & CEO</p>
          </div>

          {/* team member img */}
          <div className="membersec">
            <img
              className="teammember"
              src="Donna.jpg"
              alt="female office worker"
            />

            <p className="normaltext">Donna <br />General Manager of Finance</p>
          </div>

          {/* team member img */}
          <div className="membersec">
            <img
              className="teammember"
              src="eventcoordinator.jpg"
              alt="male office worker with glasses"
            />

            <p className="normaltext">Malcom <br /> General Events Manager</p>
          </div>

          {/* team member img */}
          <div className="membersec">
            <img
              className="teammember"
              src="elliot.jpg"
              alt="young male office worker"
            />
            {/* Made a change for director of operations in strapify */}
            <p className="normaltext">{aboutData.opsDirector} <br /> Director of operations</p> 
          </div>
        </div>

        <div className="btnsec">
          <button className="hollow-green-btn">Load More</button>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps() {

  const aboutResponse = await strapiRequest("/about-page?populate=*"); //deep population needed since images are embedded in carousel

  return {
    props: {
      aboutData: aboutResponse.attributes,
    },
  };

}


