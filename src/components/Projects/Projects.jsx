/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg'; // Importing a background pattern image
import mywork_data from '../../assets/mywork_data'; // Importing project data

const Projects = () => {
  // State to keep track of the currently selected project for modal display
  const [selectedProject, setSelectedProject] = useState(null);
  // Ref to reference the projects section for intersection observation
  const projectsRef = useRef(null);

  // Function to handle project item click
  const handleProjectClick = (work) => {
    setSelectedProject(work); // Set the selected project to show in the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null); // Clear the selected project to hide the modal
  };

  // Effect to trigger animations when the projects section comes into view
  useEffect(() => {
    const section = projectsRef.current; // Reference to the projects section

    // Create an IntersectionObserver to trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-projects'); // Add class to trigger animation
            observer.unobserve(section); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section); // Start observing the section
    }

    // Clean up observer when the component unmounts
    return () => {
      if (section) observer.unobserve(section); // Stop observing
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div ref={projectsRef} id='projects' className='projects'>
      {/* Section title and background pattern */}
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" /> {/* Background pattern image */}
      </div>
      <br />
      {/* Container for project items */}
      <div className="projects-container">
        {/* Map through project data and render each project item */}
        {mywork_data.map((work, index) => (
          <div key={index} className="project-item">
            <img src={work.w_img} alt="" /> {/* Project image */}
            {/* Overlay for project name with click handler */}
            <div className="project-name-overlay" onClick={() => handleProjectClick(work)}>
              {work.w_name}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected project details */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProject.w_name}</h2> {/* Project name */}
            <br />
            <h4>Description:</h4>
            <p>{selectedProject.w_desc}</p> {/* Project description */}
            <br />
            <h4>Technologies Used:</h4>
            <ul>
              {/* List of technologies used in the project */}
              {selectedProject.w_technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            {/* Button to close the modal */}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <br />
    </div>
  );
};

export default Projects;