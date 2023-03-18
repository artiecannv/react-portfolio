import React, { useState } from "react";
import Me from "../assets/me.jpg";

const About = (props) => {
  const { contactSelected, setContactSelected } = props;
  console.log(contactSelected);

  return (
    <section className="about-container">
      <div>
        <h1>About Me:</h1>
        <div>
          <img src={Me} className="myPhoto" alt="myPhoto" />
        </div>
        <p>
          Hey! I'm Artie. I am a training coordinator currently, but I am
          branching out my career path to involve Web Development.
        </p>
        <p>
          I have found a passion for front-end development, I love to style and
          build nice and responsive pages.
        </p>
        <h3>Technologies I am profiecient with:</h3>
        <ul className="tech-prof">
          <li>HTML5, CSS and JavaScript</li>
          <li>React</li>
          <li>GitHub</li>
        </ul>
        <h3>Technologies I have been exposed to:</h3>
        <ul className="tech-learn">
          <li>Node</li>
          <li>Express</li>
          <li>SQL/NoSQL</li>
          <li>jQuery</li>
        </ul>
        <h3>Education:</h3>
        <ul>
          <li> University of Denver - Full Stack Coding Certificate</li>
        </ul>
        <button onClick={() => setContactSelected(true)}>Contact Me</button>
      </div>
    </section>
  );
};

export default About;
