/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Importing Font Awesome icons
import './Footer.css'; // Importing the CSS file for styling the Footer component

const Footer = () => {
  return (
    <div className='footer'>
      <hr /> {/* Horizontal line to visually separate the footer */}
      <div className="footer-bottom">        
        <div className="footer-icons"> {/* Container for the social media icons */}
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a> */}
          <a href="https://www.linkedin.com/in/kaveesha-gayendra" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://github.com/GayendraSHK" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
        <p className="footer-bottom-left">© 2024 Kaveesha Gayendra. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
