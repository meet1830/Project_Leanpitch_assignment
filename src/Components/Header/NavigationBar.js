import React from "react";
import logo from "../../Assests/logo.png";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <span>
            <img src={logo} alt="Logo" />
          </span>
          <span>Leanpitch</span>
        </div>
        <div className="nav-bar-right">
          <span className="nav-bar-subscribe">
              <a href="https://leanpitch.com/" target="_blank" rel="noreferrer">
                Subscribe
              </a>
          </span>
          <span>
            <a href="https://leanpitch.com/" target="_blank" rel="noreferrer">
              Contact Us
            </a>
          </span>
        </div>
      </nav>
    </>
  );
}
