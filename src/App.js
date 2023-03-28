import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
//! TODO: Future Development
// import Background from "./assets/background.mp4";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/react-portfolio" element={<About />} />
        <Route path="/react-portfolio/projects" element={<Project />} />
        <Route path="/react-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
