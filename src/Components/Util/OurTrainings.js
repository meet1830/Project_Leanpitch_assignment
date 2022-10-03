import React from "react";
import logo from '../../Assests/logo.png'
import './OurTrainings.css'

export default function OurTrainings(props) {
  return (
    <div className="trainings">
      <div className="training">
        <img src={logo} alt='alt'/>
        <div className="title-wrapper">
          <p className="title">{props.title}</p>
        </div>
        <div className="details">
          <p className="first-p">Upcoming Training</p>
          <p className="second-p">{props.date}</p>
        </div>
        <div className="button-wrapper">
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
