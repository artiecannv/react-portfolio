import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/icons/github-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <ul className="flex justify-evenly">
        <li className="rounded">
          <Link
            target="_blank"
            to="https://github.com/artiecannv"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github-icon" className="h-10 w-10"></img>
          </Link>
        </li>
        <li className="rounded">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/arthur-cann-62b213248/"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="linkedin-icon"
              className="h-10 w-10"
            ></img>
          </Link>
        </li>
        <li className="rounded">
          <Link
            target="_blank"
            to="https://twitter.com/arthurthe05th"
            rel="noreferrer"
          >
            <img
              src={twitterIcon}
              alt="twitter-icon"
              className="h-10 w-10"
            ></img>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
