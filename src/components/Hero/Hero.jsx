/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typed from 'typed.js'; // Import the 'Typed' library

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
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;