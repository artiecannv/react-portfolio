import React, { useState } from "react";
import { validateEmail } from "../utils/emailValidate.js";

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col space-y-6 bg-gray-900 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col justify-between">
          <div className="underline">
            <h1>Let's Create Together!</h1>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

