import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function signin2() {
  return (
    <div className="signin2">
      <div className="border">
        <div className="main_ctr">
          <img className="btm_lft" src="bottomleft.jpg" />
          <img className="top_lft" src="topleft.png" />
          <div className="info_ctr">
            <h1 className="dum">Already have an account?</h1>
            <button className="si_in">Log in</button>
          </div>
          <div className="alr_ctr">
            <h1 className="new_acc">Sign up for new account</h1>
            <p className="setup">
              Let's get you all set up so you can start creating your
              <br></br>first onboarding experience.
            </p>
            <form>
              <div className="name_field">
                <div className="f_ctr">
                  <label for="f_name" className="label">
                    First Name
                  </label>
                  <br></br>
                  <input type="text" className="f_name" placeholder="John" />
                </div>
                <div className="rl_ctr">
                  <label for="l_name" className="label">
                    Last Name
                  </label>
                  <br></br>
                  <input type="text" className="l_name" placeholder="Doe" />
                </div>
              </div>
              <br></br>
              <label for="email" className="label">
                Email
              </label>
              <br></br>
              <input
                type="text"
                className="email"
                placeholder="abc@gmail.com"
              ></input>
              <br></br>
              <label for="pass" className="label">
                Password
              </label>
              <br></br>
              <input
                type="password"
                className="pass"
                placeholder="Password"
              ></input>
              <br></br>
            </form>
            <p className="alr_acc">
              Already have an account?{" "}
              <Link className="log" href={"#"}>
                Log in
              </Link>
            </p>
            <button className="si_up">Sign Up</button>
            <p className="alt_su">Or sign up using</p>
            <div className="login_icons">
              <FaTwitter />
              <FaFacebook />
              <FaGoogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
