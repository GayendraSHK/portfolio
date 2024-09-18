/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Smooth scroll for anchor links
import Typed from 'typed.js'; // Import the 'Typed' library for typing animation
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Icons for social links

const Hero = () => {
  const typedRef = useRef(null); // Reference for the typed effect
  const heroRef = useRef(null); // Reference for the hero section (used for animation)

  // Typed.js setup for typing animation
  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer.",
        "IT Undergraduate.",
      ],
      typeSpeed: 50, // Speed of typing
      backSpeed: 50, // Speed of deleting characters
      loop: true, // Loop the typing animation
      showCursor: false, // Disable the blinking cursor
    };

    const typed = new Typed(typedRef.current, options); // Initialize the typing effect

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  // Intersection Observer for triggering animation when the hero section comes into view
  useEffect(() => {
    const section = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-hero'); // Add animation class when in view
            observer.unobserve(section); // Stop observing after the animation triggers
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section); // Start observing the hero section
    }

    return () => {
      if (section) observer.unobserve(section); // Cleanup observer on unmount
    };
  }, []);

  // Resume URL (static link, can be replaced with env variable if needed)
  const resumeUrl = "https://drive.google.com/file/d/1VizOX8qWW_I_XwX5EbwiZmjQtKUPcHiY/view?usp=sharing";

  return (
    <div ref={heroRef} id='home' className='hero'> {/* Hero section */}
      <img src={profile_img} alt="" /> {/* Profile image */}
      <span>I'm Kaveesha Gayendra, </span> {/* Introduction text */}
      <h1 ref={typedRef}></h1> {/* Typed effect placeholder */}
      
      <div className="hero-action"> {/* Action buttons */}
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'> {/* Smooth scroll link to contact section */}
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer"> {/* Link to the resume */}
            My Resume
          </a>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="social-links-container">
        <h2 className="social-links-title">
          Find me in
        </h2>
        <div className="social-icons-container">
          <a href="https://github.com/GayendraSHK" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub /> {/* GitHub icon */}
          </a>
          <a href="https://www.linkedin.com/in/kaveesha-gayendra" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn /> {/* LinkedIn icon */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;