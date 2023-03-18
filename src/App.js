import React, { useState } from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  console.log(contactSelected);

  return (
    <div>
      <Header />
      {!contactSelected ? (
        <>
          <About setContactSelected={setContactSelected} />
        </>
      ) : (
        <>
          <ContactForm setContactSelected={setContactSelected} />
        </>
      )}
      <Project />
      <Footer />
    </div>
  );
}

export default App;
