/* eslint-disable no-unused-vars */
/* Disable eslint rule for unused variables (if any) */
import React, { useState, useRef } from 'react'; // Import React, useState, and useRef hooks
import './Navbar.css'; // Import CSS for styling the Navbar
import logo from '../../assets/logo.png'; // Import logo image
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Import AnchorLink for smooth scrolling
import menu_open from '../../assets/menu_open.svg'; // Import menu open icon
import menu_close from '../../assets/menu_close.svg'; // Import menu close icon

const Navbar = () => {
  // State to manage the currently selected menu item
  const [menu, setMenu] = useState("home");
  // Ref to access the menu DOM element directly
  const menuRef = useRef();

  // Function to open the mobile menu by sliding it into view
  const openMenu = () => {
    menuRef.current.style.right = "0"; // Set the menu's right position to 0 (visible)
  };

  // Function to close the mobile menu by sliding it out of view
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; // Set the menu's right position to -350px (hidden)
  };

  return (
    <div className='navbar'>
      {/* Logo displayed on the navbar */}
      <img src={logo} alt='logo' className='nav-logo' />
      {/* Icon to open the mobile menu */}
      <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open' />
      {/* Mobile menu, hidden by default and shown when openMenu is triggered */}
      <ul ref={menuRef} className="nav-menu">
        {/* Icon to close the mobile menu */}
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
        {/* List item for the Home section */}
        <li className={menu === "home" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu("home")}>Home</p> {/* Set the menu state to "home" on click */}
          </AnchorLink>
        </li>
        {/* List item for the About Me section */}
        <li className={menu === "about" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p> {/* Set the menu state to "about" on click */}
          </AnchorLink>
        </li>
        {/* List item for the Education section (commented out) */}
        {/* <li className={menu === "education" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#education'>
            <p onClick={() => setMenu("education")}>Education</p> // Set the menu state to "education" on click 
          </AnchorLink>
        </li> */}
        {/* List item for the Technologies section */}
        <li className={menu === "technologies" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#technologies'>
            <p onClick={() => setMenu("technologies")}>Technologies</p> {/* Set the menu state to "technologies" on click */}
          </AnchorLink>
        </li>
        {/* List item for the Projects section */}
        <li className={menu === "projects" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => setMenu("projects")}>Projects</p> {/* Set the menu state to "projects" on click */}
          </AnchorLink>
        </li>
        {/* List item for the Contact Me section */}
        <li className={menu === "contact" ? 'selected' : ''}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact Me</p> {/* Set the menu state to "contact" on click */}
          </AnchorLink>
        </li>
      </ul>
      {/* Button to navigate to the contact section with smooth scrolling */}
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;