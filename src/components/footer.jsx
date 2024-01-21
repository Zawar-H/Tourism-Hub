import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <>
      {/* footer */}
      <div className="footer">
        {/* sec1 */}
        <div className="footersec1">

          <h1 className="mediumtext">
            Sign Up and Host Your Events Now!
          </h1>
          <Link href="/signin2"><button className="footerbtn">Sign Up</button></Link>
        </div>

        {/* sec2 */}
        <div className="footersec2">
          {/* horizontal 1 */}
          <div className="verticalsec">

            <Link href="/">
              <img
              className="logo2"
              src="nobglogo.png"np
              alt="niagarabenchlands logo"
              />
            </Link>

            <p>Subsrcibe for our upcoming latest articles and news resources</p>

            <input className="emailin" type="text" value="Email Address" />
          </div>
          {/* horizontal 2 */}
          <div className="verticalsec">
            <h2 className="bold">Links</h2>
            
            <Link href="about">About us</Link>
            <div className="fillerfooter"><Link href="about">Meet our team</Link>
            <Link href="about">News & media</Link>
            <Link href="events">Our projects</Link></div>
            <Link href="contact">Contacts</Link>
          </div>

          {/* horizontal 3 */}
          <div className="verticalsec">
            <h2 className="bold">Contact</h2>
            <p className="horizontal">
              <img className="img2" src="addr.png" />
              +98(000)-9850
            </p>
            <p className="horizontal">
              <img className="img2" src="addr.png" />
              needhelp@lincoln.co
            </p>
            <p className="horizontal">
              <img className="img2" src="addr.png" />
              66 Brooklyn Golden Street Line, New York
            </p>
          </div>

          {/* horizontal 4 */}
          <div className="horizontal">

          <Link href="https://www.twitter.com"><img className="img3" src="Group.png" /></Link>
          <Link href="https://www.instagram.com"><img className="img3" src="instagram.png" /></Link>
          <Link href="https://www.pinterest.ca"><img className="img3" src="pinterest.png" /></Link>
          <Link href="https://www.facebook.com"><img className="img3" src="facebook.png" /></Link>
          </div>
        </div>
      </div>
      <h1 className="copyright">© All Copyright 2023 by Civiconnect Inc</h1>
    </>

  );
}