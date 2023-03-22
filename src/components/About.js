import React, { useState } from "react";
import Me from "../assets/me.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* TODO: Make/get 5 tally mark logo for this */}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Arthur Cann the Fifth
            <br className="hidden lg:inline-block" /> I'm passionate for
            creating clean and cool applications.
          </h1>
          <p className="mb-8 leading-relaxed"></p>
          {/* Link to Contact & Project Pages */}
          <div className="flex justify-center">
            <Link to="/projects">See my Work</Link>
            <Link to="/contact">Work with Me</Link>
          </div>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          src={Me}
          className="object-cover object-center rounded"
          alt="myPhoto"
        />
      </div>
    </section>
  );
};

export default About;
