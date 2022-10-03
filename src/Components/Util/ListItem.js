import React from "react";
import Event from "./Event";
import './ListItem.css';

function ListItem({title}) {
  return (
    <div className="main-videos">
      <h1 className="main-h1">{title}</h1>
      <div className="main-videos-wrapper">
        <Event/>
        <Event/>
        <Event/>
        <Event/>
      </div>
    </div>
  );
}

export default ListItem;
