import React from "react";
import "./ThinkingLabs.css";
import PTLabs from '../../Assests/thinkinglabs.jpg'

export default function ThinkingLabs() {
  return (
    <div className="thinking-labs">
      <div className="content">
        <h2>Leanpitch Thinking Labs</h2>
        <p>
          Product Thinking Communty introduces PT Labs powered by Leanpitch.
          Product Managers are creative thinkers and life long researchers.
          Their curiosity to understand the problem, persistence to solve them,
          and empathy to make the solutions easy makes them resourceful in
          solving Social Problems.
        </p>
        <p>
          If you have it in you and are looking for an opportunity to contribute
          back to the society, join PT Labs. Become part of a product team of
          volunteers, pickup a social problem, swarn together, design, anad run
          experiments to find a problem/solution fit. Present your discovery and
          be recognized at next Product Thinking Conference. Product thinking
          community will pursue further on implementing a solution in the
          subsequent cohorts, which you can again be part of.
        </p>
        <p className="content-bold">
          Share your interest by submitting your details. We will get back to
          you with more information.
        </p>
        <a href="https://www.leanpitch.com" target="_blank" rel="noreferrer">
          <button>
            <span className="button-span">View Details</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
        <a href="https://www.leanpitch.com" target="_blank" rel="noreferrer">
          <button>
            <span className="button-span">Register Now</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
      <img src={PTLabs} alt='PTLabs'/>
    </div>
  );
}
