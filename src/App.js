import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// const Root = () => {
//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Header />
//       <Home />
//       <Footer />
//     </main>
//   );
// };

export default App;
