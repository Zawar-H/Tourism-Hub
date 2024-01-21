import React from "react";

export default function searchbar() {
  return (
    <>
      {/* sets searchbar */}
      <div className="vertical">
        {/* beginning of searchbar */}
        <div className="sb">
          {/* section 1 */}
          <div className="sbvertical">
            <h1 className="sbh1">Search Events</h1>
            <input className="sbh2" type="text" placeholder="Sunset Yoga" />
          </div>

          {/* section 2 */}
          <div className="sbvertical">
            <h1 className="sbh1">Place</h1>
            <input className="sbh2" type="text" placeholder="Lincoln" />
          </div>

          {/* section 3 */}
          <div className="sbvertical">
            <h1 className='sbh1'>Time</h1>
            <h2 className="sbh2">Any date </h2>
          {/* section 4 */}
          </div>
        </div> 
        {/* end of searchbar */}
      </div>
    </>
  );
}
