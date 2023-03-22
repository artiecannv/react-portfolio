import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="homepage">
        <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Work with Me!</Link>
        </li>
      </ul>
      </div>
    );
  };

  export default Home;