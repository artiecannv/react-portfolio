import React, { useState } from "react";

const About = (props) => {
  const { contactSelected, setContactSelected } = props;
  console.log(contactSelected);

  return (
    <div>
      <section className="about-container">
        <div>
          <h2>About Me</h2>
          <p>
            Hey! I'm Artie. I am a training coordinator currently, but I am
            branching out my career path to involve{" "}
          </p>
          <p>Technologies I am profiecient with:</p>
          <ul className="technologies">
            <li>HTML5, CSS and JavaScript</li>
            <li>React</li>
            <li>GitHub</li>
          </ul>
          <p>Technologies I have been exposed to:</p>
          <ul className="technologies">
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL/NoSQL</li>
            <li>jQuery</li>
          </ul>
        </div>
      </section>
      <button onClick={() => setContactSelected(true)}>Contact Me</button>
    </div>
  );
};

export default About;
