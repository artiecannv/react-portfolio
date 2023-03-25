import React from "react";
import githubIcon from "../assets/icons/github-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <ul className="flex justify-evenly">
        <li className="rounded">
          <a
            target="_blank"
            href="https://github.com/artiecannv"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github-icon" className="h-10 w-10"></img>
          </a>
        </li>
        <li className="rounded">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arthur-cann-62b213248/"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin-icon" className="h-10 w-10"></img>
          </a>
        </li>
        <li className="rounded">
          <a
            target="_blank"
            href="https://twitter.com/arthurthe05th"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="twitter-icon" className="h-10 w-10"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
