import React from "react";
import './Styles/Trainings.css'
import OurTrainings from "../../Util/OurTrainings";

export default function Trainings({trainingRef}) {
  return (
    <div className="trainings" ref={trainingRef}>
      <div className="trainings-wrapper" id="training">
        <OurTrainings title="Design Thinking" date="8th October, 2021" />
        <OurTrainings
          title="Certified Scrum Product Owner Certification"
          date="9th October, 2021"
        />
        <OurTrainings
          title="Product Management Launchpad"
          date="22th October, 2021"
        />
        <OurTrainings
          title="Advanced Certified Scrum Product Owner"
          date="26th October, 2021"
        />
        <OurTrainings
          title="Product Management Bootcamp"
          date="will be scheduled soon"
        />
      </div>
    </div>
  );
}
