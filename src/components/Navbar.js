import { MailIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-white bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="/"
            className="ml-3 text-xl hover:text-blue-400 hover:underline"
          >
            Arthur, the Fifth
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 flex items-center text-base justify-between">
          <a
            href="/projects"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-green-400 rounded text-base mt-4 md:mt-0"
          >
            Projects
            <CodeIcon className="w-4 h-4 ml-1" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-blue-400 rounded text-base mt-4 md:mt-0"
          >
            Work with Me
            <MailIcon className="w-4 h-4 ml-1" />
          </a>
          <a
            href="https://docs.google.com/document/d/109DQehfUgqW_FyFYlUoVQbzJCaZR3DTM5gJ3Vp0mMwM/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-red-400 rounded text-base mt-4 md:mt-0"
          >
            Resume
            <MailIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
