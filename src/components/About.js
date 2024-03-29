import React from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import Me from "../assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-700">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-400">
            Hey! My name is Arthur.
            <p className="text-lg text-green-500">
              I am passionate for building creative apps.
            </p>
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Detail oriented web development student looking for a career in the
            technology industry. I love to work on a team to ensure that a nice,
            clean, and effiecient product is delivered to users, as I am quite
            the web user myself!
          </p>
          <Skills />
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex text-gray-800 bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:drop-shadow-xl hover:text-white hover:bg-blue-500 rounded text-lg"
            >
              Work With Me?
            </Link>
            <Link
              to="/projects"
              className="ml-4 inline-flex text-gray-800 bg-green-400 border-0 py-2 px-6 focus:outline-none hover:drop-shadow-xl hover:bg-green-500 hover:text-white rounded text-lg"
            >
              See My Projects!
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src={Me}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
