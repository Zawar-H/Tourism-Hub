import React from "react";

export default function sponsors() {
  return (
    <>
    <section className="sponsors">
      {/* beginning of final section */}
      <div className="lslanding">
        {/* sponsors section */}
        <h4 className="greensub">Our Sponsors</h4>

        <p className="mediumtext">
          We've had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>

        <div className="sponsorimg">
          <img className="logo" src="spotify.png" alt="logo" />
          <img className="logo" src="stripe.png" alt="logo" />
          <img className="logo" src="google.png" alt="logo" />
          <img className="logo" src="youtube.png" alt="logo" />
          <img className="logo" src="zoom.png" alt="logo" />
        </div>
      </div>
    </section>
    </>
  );
}
