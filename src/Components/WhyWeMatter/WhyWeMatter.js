import React from "react";
import "./WhyWeMatter.css";
import whywematter from "../../Assests/whywematter.jpg";

export default function WhyWeMatter() {
  return (
    <div className="why-we-matter">
      <h2>Why We Matter?</h2>
      <div className="content">
        <div className="content-text">
          <h3>Creative Thinking for creating an impact!</h3>
          <p>
            Leanpitch is problem solving. Whether it's your kid asking for a
            solution to his day to day problems or the rise in threats of Global
            Warming, it's evident that the whole human kind needs to be product
            thinkers. We, at Product Thinking community, strive to provide such
            a platform for practitioners to come together and learn from each
            other about the craft of building products. The platform is run by
            the community for the community. We are a community with 46k+
            problem thinkers hosting various events across India: Webinars every
            week, meet-ups every month in every city, two conferences a year.
          </p>
        </div>
        <img src={whywematter} alt='whywematter'/>
      </div>
      <a href="https://www.leanpitch.com" target='_blank' rel="noreferrer">
        <button className="why-we-matter-button">
          <span className="button-icon-gap">Join Our Community</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a>
    </div>
  );
}
