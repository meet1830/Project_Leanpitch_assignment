import React from "react";
import './ButtonsTime.css';

const ButtonsTime = ({color1, color2}) => {
  const style1 = {
    backgroundColor: color1,
    color: color2
  }

  const style2 = {
    backgroundColor: color2,
    color: color1
  }

  return (
    <div className="buttons-time">
      <button className="button-time-first" style={style1}>Upcoming</button>
      <button className="button-time-second" style={style2}>Past</button>
    </div>
  );
}

export default ButtonsTime;