import React from "react";
import "./Styles/Meetups.css";

export default function Meetups({meetupsRef}) {
  return (
    <div className="meetups" ref={meetupsRef}>
      <p id='meetups'>Awesome meetups will be here soon!</p>
    </div>
  );
}
