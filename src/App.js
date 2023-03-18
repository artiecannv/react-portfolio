import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App;
