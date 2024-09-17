/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typed from 'typed.js'; // Import the 'Typed' library
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const typedRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer.",
        "IT Undergraduate.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Disable the blinking cursor
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const section = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-hero');
            observer.unobserve(section); // Stop observing after the animation triggers
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is in view
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Access the resume URL from the environment variable
  const resumeUrl = "https://drive.google.com/file/d/1VizOX8qWW_I_XwX5EbwiZmjQtKUPcHiY/view?usp=sharing";

  return (
    <div ref={heroRef} id='home' className='hero'>
      <img src={profile_img} alt="" />
      <span>I'm Kaveesha Gayendra,</span>
      <h1 ref={typedRef}></h1>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          {/* Use the resume URL from the environment variable */}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>

      <div className="social-links-container">
        <h2 className="social-links-title">
          Find me in
        </h2>
        <div className="social-icons-container">
          <a href="https://github.com/GayendraSHK" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaveesha-gayendra" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Hero;
