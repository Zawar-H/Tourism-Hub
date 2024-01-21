import { IncomingMessage } from "http";
import React from "react";
import Link from "next/link";

const contact = () => {
  return (
    <div>
      <div>
        <div className="flex w-full content-center">
          <iframe
            className="flex mr-auto ml-auto w-6/12 rounded-3xl"
            src={
              "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2910.7734751063413!2d-79.40313598789247!3d43.151285871009996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x882cad5d1343a5af%3A0x527653b2dc272447!2sKacaba%20Vineyards%20and%20Winery%2C%203550%20King%20St%2C%20Vineland%2C%20ON%20L0R%202C0!3m2!1d43.1512859!2d-79.4005557!5e0!3m2!1sen!2sca!4v1695926219030!5m2!1sen!2sca"
            }
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>




































    
    // <section className = "contact">
    //   <div className="pic">
    //     <img
    //       classname="test"
    //       src="charanjeet-dhiman-mHusyBu4bxM-unsplash.jpg"
    //     />
    //   </div>
    //   <div className="h1">
    //     <h1>Contact Us</h1>
    //   </div>
    //   <div className="txt1">
    //     <div className="main_ctr">
    //       <div className="left_ctr">
    //         <h1 className="th">Let's Get in Touch</h1>
    //         <h2 className="pc">Points of Contact</h2>
    //         <p className="can">CAN | Niagara Benchlands</p>
    //         <div className="p_edit">
    //           <p className="rd">123 Testing Rd, Unit 1820 Toronto M4S 0B8</p>
    //         </div>
    //         <p className="p">President</p>
    //         <p className="p_email">bheal@bell.net</p>
    //         <p className="p">Vice President</p>
    //         <p className="p_email">stevedainard64@gmail.com</p>
    //         <p className="p">Vice President</p>
    //         <p className="p_email">stevedainard64@gmail.com</p>
    //         <p className="p">Vice President</p>
    //         <p className="p_email">stevedainard64@gmail.com</p>
    //         <p className="p">Vice President</p>
    //         <p className="p_email">stevedainard64@gmail.com</p>
    //       </div>
    //       <div className="right_ctr">
    //         <form>
    //           <label for="name" className="label">
    //             Name
    //           </label>
    //           <br></br>
    //           <input type="text" className="name" placeholder="John Doe" />
    //           <br></br>
    //           <label for="email" className="label">
    //             Email
    //           </label>
    //           <br></br>
    //           <input
    //             type="text"
    //             className="email"
    //             placeholder="abc@gmail.com"
    //           ></input>
    //           <br></br>
    //           <label for="phone" className="label">
    //             Phone Number
    //           </label>
    //           <br></br>
    //           <input
    //             type="text"
    //             className="phone"
    //             placeholder="123-456-7890"
    //           ></input>
    //           <br></br>
    //           <label for="msg" className="label">
    //             Message
    //           </label>
    //           <br></br>
    //           <input type="text" className="msg"></input>
    //         </form>
    //         <Link href = "mailto:email@gmail.com" className="btn">Send Message</Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default contact;
