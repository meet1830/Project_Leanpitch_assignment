import React from "react";
import "./Header.css";
import Modal from "./Modal";
import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <div className="App-header">
      <NavigationBar />
      <div className="header-modal-head">
        <Modal />
      </div>
    </div>
  );
}
