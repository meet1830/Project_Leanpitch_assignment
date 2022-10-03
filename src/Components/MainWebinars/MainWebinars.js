import React from "react";
import Webinars from "../Header/Modals/Webinars";
import ButtonsTime from "../Util/ButtonsTime";
import "./MainWebinars.css";

export default function MainWebinars() {
  return (
    <div className="main-webinars">
      <h1 className="main-h1">Our Webinars</h1>
      <div className="buttons-time-wrapper">
        <ButtonsTime color1="black" color2="white" />
      </div>
      <div className="main-webinars-cards">
        <Webinars />
      </div>
    </div>
  );
}
