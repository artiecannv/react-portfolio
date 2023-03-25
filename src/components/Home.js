import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-100% bg-gray-700">
      <ul>
        <li className="text-blue-400">
          <Link to="/about">About Me</Link>
        </li>
        <li className="text-blue-400">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-blue-400">
          <Link to="/contact">Work with Me!</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
