import React from "react";
import "./Styles/Conference.css";

export default function Conference(props) {
  return (
    <div className="conference" ref={props.conferenceRef} id="conference">
      <p style={{ fontSize: props.size }}>
        Conferences are not just about learning from the speakers. It's also
        about meeting new people, learning from attendees, making connections,
        getting to know each other and being part of a community.
      </p>
      <p style={{ fontSize: props.size }}>
        Having hosted the conference online last year and after close
        consultation with the community, speakers, exhibitors and event
        partners, we have decided to host our next conference in person to make
        it more effective.
      </p>
      <p style={{ fontSize: props.size }}>
        We will be back with more information once COVID subsides
      </p>
      <button className="conference-button">
        <p>Notify Me</p>
        {/* <i class="fa-solid fa-arrow-right"></i> */}
      </button>
    </div>
  );
}
