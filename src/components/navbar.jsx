import Link from "next/link";
import React, { useState } from "react";

export default function navbar() {

  const [collapse,setCollapse] = useState("NVoptions");

   const onToggle = () => {
    collapse === "NVoptions" ? setCollapse("NVoptions NV_collapse") : setCollapse("NVoptions");
   }

  return (
    <>
    <div className="NV">
        <div className="logo">
          <Link href="/">
            <img src="logo.png" alt="Benchlands logo"/>
          </Link>
        </div>

        <div className={collapse}>

          <Link href="about">
          <button className="NVb">About us</button>
          </Link>

          <Link href="events">
          <button className="NVb">Events</button>
          </Link>
          
          <Link href="contact">
          <button className="NVb">Contact</button>
          </Link>
          
          <Link href="signin">
          <button className="NVsu">Sign Up</button>
          </Link>

          <Link href="signin">
          <button className="NVsi">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
}
