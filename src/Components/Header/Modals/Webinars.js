import React from "react";
import './Styles/Webinars.css'

export default function Webinars({webinarsRef}) {
  return (
    <div className="webinars-wrapper" ref={webinarsRef}>
      <div className="webinar" id="webinars">
        <p className="webinar-title">Remaining in Problem Domain for User Needs - How does it help?</p>
        <p className="webinar-date">30th Sept, 2021</p>
      </div>
    </div>
  );
}
