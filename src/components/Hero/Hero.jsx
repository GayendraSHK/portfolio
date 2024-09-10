/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typed from 'typed.js'; // Import the 'Typed' library

const Hero = () => {

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <span>I'm Kaveesha Gayendra,</span>
        <h1 ref={typedRef}></h1>
        {/* <p>
          I am a frontend developer from California, USA with 10 years of experience in 
          multiple companies like Microsoft, Tesla and Apple.
        </p> */}
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero