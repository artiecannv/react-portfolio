import React from 'react'

const ContactForm = (props) => {
    const { setContactSelected } = props
  return (
    <div>
        <h1>Contact Form</h1>
        <button onClick={() => setContactSelected(false)}>Go to about page</button>
    </div>
  )
}

export default ContactForm