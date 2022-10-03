import React from "react";
import ButtonsTime from "../Util/ButtonsTime";
import "./MainMeetups.css";

export default function Meetups() {
  return (
    <div className="main-meetups">
      <h1 className="main-h1">Our Meetups</h1>
      <div className="buttons">
        <ButtonsTime color1="black" color2="white" />
        <button className="button-filter">
          <span className="button-span">Filter By City</span>
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <p className="main-meetups-text">Awesome meetups will be here soon!</p>
    </div>
  );
}
