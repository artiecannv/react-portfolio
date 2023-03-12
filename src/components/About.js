import React, { useState } from "react";

const About = (props) => {
    
    const { contactSelected, setContactSelected } = props
    console.log(contactSelected)

  return (
    <div>
        <h1>About</h1>
        <button onClick={() => setContactSelected(true)}>Contact Me</button>
    </div>
    
  )
}

export default About