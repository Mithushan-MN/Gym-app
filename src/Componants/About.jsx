import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id="about">
      <div className='about-image'>
        <img src={aboutimage} alt="" />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum commodi autem cupiditate praesentium atque recusandae. Ipsa eius optio quis?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
