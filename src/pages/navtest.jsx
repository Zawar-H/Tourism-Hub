import Link from "next/link";
import React from "react";
import {FaBars} from 'react-icons/fa'; 
import {useState} from 'react';

export default function navbar() {
  const [collapse, setCollapse] = useState("NVoptions");
  const onToggle = () =>{
    collapse === 'NVoptions' ? setCollapse("NVoptions NVcollapse") : setCollapse("NVoptions");
  }
  return (
    <>
      <div className="NV">
        <div className="logo">
          <Link href="/">
            <img src="NiagaraBenchlands.png" alt="Benchlands logo"/>
          </Link>
        </div>
        <button className="burger" onClick={onToggle}>
            <FaBars/>
        </button>

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
