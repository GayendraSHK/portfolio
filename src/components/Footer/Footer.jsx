/* eslint-disable no-unused-vars */ 
// Disables the rule for unused variables to avoid ESLint warnings (for example, React in some cases)
import React from 'react'
import './Footer.css' // Importing the CSS file for styling the Footer component

const Footer = () => {
  return (
    <div className='footer'> {/* Main container for the footer */}
        <hr /> {/* Horizontal line to visually separate the footer */}
        <div className="footer-bottom"> {/* Container for the footer content */}
            <p className="footer-bottom-left">© 2024 Kaveesha Gayendra. All rights reserved.</p> {/* Footer text with copyright notice */}
        </div>
    </div>
  )
}

export default Footer