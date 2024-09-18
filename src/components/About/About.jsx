/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './About.css'; // Import the associated CSS for the About component
import theme_pattern from '../../assets/theme_pattern.svg'; // Importing an SVG for the theme pattern
import profile_img from '../../assets/about_profile.png'; // Importing the profile image
import Typed from 'typed.js'; // Import the 'Typed.js' library for typing animation

const About = () => {
  // useRef hook to reference the 'about' section for animations
  const sectionRef = useRef(null);
  
  // useRef hook to reference the element where the Typed.js animation will be displayed
  const typedRef = useRef(null);

  // useEffect to initialize the Typed.js library for text animation
  useEffect(() => {
    // Configuration for the typing animation
    const options = {
      strings: [
        // Array of strings for the typing effect. In this case, it is a single string with HTML markup.
        "I am a highly motivated and enthusiastic IT undergraduate at the University of Moratuwa, driven by a passion for technology and a commitment to excellence. With a solid academic background and strong technical skills, I thrive in dynamic environments where I can tackle challenges and continuously grow.<br /><br />Eager to expand my knowledge and stay at the forefront of emerging technologies, I am dedicated to contributing to innovative, impactful projects. Whether working independently or as part of a team, I focus on delivering high-quality results and making a meaningful impact in the ever-evolving world of technology."
      ],
      typeSpeed: 30, // Typing speed in milliseconds
      backSpeed: 0, // No backspace speed since there is no looping
      loop: false, // Animation will run once
      showCursor: false, // Disable the blinking cursor
      preStringTyped: function (arrayPos, self) {
        // Hook to modify the element's inner HTML before the typing starts
        self.el.innerHTML = self.strings[arrayPos];
      }
    };

    // Initialize the Typed.js animation with the above options
    const typed = new Typed(typedRef.current, options);

    // Cleanup to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  // useEffect to handle section animations using the IntersectionObserver API
  useEffect(() => {
    const section = sectionRef.current;

    // Observer that triggers when a portion (30%) of the section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate'); // Add 'animate' class to trigger CSS animations
            observer.unobserve(section); // Stop observing once the animation triggers
          }
        });
      },
      { threshold: 0.3 } // Trigger the animation when 30% of the section is visible
    );

    // Start observing the 'about' section
    if (section) {
      observer.observe(section);
    }

    // Cleanup the observer when the component unmounts or if the section is not available
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={sectionRef} id='about' className='about'>
      {/* Section title with a heading and a theme pattern image */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Main content of the About section split into two columns */}
      <div className="about-section">
        {/* Left column with the profile image */}
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        {/* Right column with the paragraph controlled by Typed.js */}
        <div className="about-right">
          <div className="about-para">
            {/* The paragraph element where the Typed.js animation will run */}
            <p ref={typedRef}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;