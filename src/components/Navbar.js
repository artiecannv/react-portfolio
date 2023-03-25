import { UserIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-white bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl hover:text-blue-400">
            Arthur, the Fifth
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 flex items-center text-base justify-between">
          <a
            href="/projects"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-blue-300 rounded text-base mt-4 md:mt-0"
          >
            Projects
            <CodeIcon className=" hover:text-green-400 w-4 h-4 ml-1" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 hover:text-blue-300 rounded text-base mt-4 md:mt-0"
          >
            Work with Me
            <MailIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
