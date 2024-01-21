import Link from "next/link";
import React, { useState } from "react";

export default function navbar() {

  const [collapse,setCollapse] = useState("NVoptions");
  const [cross, setCross] = useState("burger");

   const onToggle = () => {
    collapse === "NVoptions" ? setCollapse("NVoptions NV_collapse") : setCollapse("NVoptions");
    cross === "burger" ? setCross("burger toggle") : setCross("burger");
   }
  return (
    <>
    <div className="NV">
        <div className="logo">
          <Link href="/">
            <img src="logo.png" alt="Benchlands logo"/>
          </Link>
        </div>
        <div onClick={onToggle} className={cross}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
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
          
          <Link href="signin2">
          <button className="NVsu">Sign Up</button>
          </Link>

          <Link href="signin2">
          <button className="NVsi">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
}
