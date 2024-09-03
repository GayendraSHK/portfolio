/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Kaveesha Gayendra,</span> Software Engineer.</h1>
        <p>
          I am a frontend developer from California, USA with 10 years of experience in 
          multiple companies like Microsoft, Tesla and Apple.
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect With Me</div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero