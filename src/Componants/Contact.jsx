import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" placeholder='Full Name' required />
        <input type="email" placeholder='Type Your Email' required/>
        <textarea name="message" placeholder='Write here.......'></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact
