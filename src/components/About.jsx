import React from "react";
import "./about.scss";

export const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <h1 className="about__tittle">About</h1>
        <p className="about__text">
          We can help you reimagine your business through a digital lens. Our
          software engineering heritage combined with our strategic business and
          innovation consulting, design thinking, and physical-digital
          capabilities provide real business value to our customers through
          human-centric innovation.
        </p>
        <div className="about__video">
          <iframe
            src="https://www.youtube.com/embed/jJPKUgsQLfU"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
