/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react'; // Import React and hooks
import './Contact.css'; // Import CSS file for styling
import theme_pattern from '../../assets/theme_pattern.svg'; // Import background pattern image
import mail_icon from '../../assets/mail_icon.svg'; // Import email icon
import location_icon from '../../assets/location_icon.svg'; // Import location icon
import call_icon from '../../assets/call_icon.svg'; // Import call icon
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import icons for LinkedIn and GitHub

const Contact = () => {
  const sectionRef = useRef(null); // Create a ref to the contact section for animation

  // Handle form submission with validation and sending data to Web3Forms API
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // Get form data

    // Extract and trim form data
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    // Basic validation for the 'name' field
    if (!name) {
      alert('Please enter your name.');
      return;
    }

    // Basic validation for the 'email' field
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!email) {
      alert('Please enter your email.');
      return;
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Basic validation for the 'message' field
    if (!message) {
      alert('Please enter your message.');
      return;
    }

    // Append access key from environment variables for secure submission
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData); // Convert FormData to an object
    const json = JSON.stringify(object); // Convert object to JSON string for API request

    try {
      // Submit form data to Web3Forms API using POST request
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type for JSON data
          Accept: "application/json" // Set Accept header to expect JSON response
        },
        body: json // Send the form data as JSON
      }).then((res) => res.json()); // Parse the response as JSON

      // Check if the submission was successful
      if (res.success) {
        alert(res.message); // Show success message
        event.target.reset();  // Clear the form after successful submission
      } else {
        alert('Something went wrong. Please try again.'); // Show error message
      }
    } catch (error) {
      // Handle network or server errors
      alert('Failed to submit the form. Please check your network connection and try again.');
    }
  };

  // Trigger animation when the section comes into view
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate'); // Add 'animate' class when section is visible
            observer.unobserve(section); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.3 } // Animation triggers when 30% of the section is in view
    );

    if (section) {
      observer.observe(section); // Observe the section for visibility
    }

    // Clean up observer when component unmounts
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={sectionRef} id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" /> {/* Background pattern */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          {/* Introduction text */}
          <h1>Let's talk</h1>
          <p>
            I am currently open to new projects and would love to hear about any opportunities you have in mind. Feel free to 
            reach out to me at any time. I'm always available to discuss how I can contribute to your next venture.
          </p>

          {/* Contact details with icons */}
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email icon" /> 
              <p>kaveeshagayendra2@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <p>+94 71 658 8619</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>Matara, Sri Lanka</p>
            </div>
          </div>

          {/* Social media links (GitHub, LinkedIn) */}
          <div className="social-links-container">
            <h2 className="social-links-title">
              Find me in
            </h2>
            <div className="social-icons-container">
              {/* GitHub link */}
              <a href="https://github.com/GayendraSHK" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
              </a>
              {/* LinkedIn link */}
              <a href="https://www.linkedin.com/in/kaveesha-gayendra" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Contact form */}
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email"  placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Send Now</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};

export default Contact;