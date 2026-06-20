import React from "react";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className="about-section">
      <div className="about-inner">
        <div className="about-header">
          <h1>Pnina Afik</h1>
          <div className="about-header-rule" />
        </div>
        <AboutCard />
      </div>
    </div>
  );
}

export default About;
