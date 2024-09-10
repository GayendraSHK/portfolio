/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (work) => {
    setSelectedProject(work);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-item">
            <img src={work.w_img} alt="" />
            <div className="project-name-overlay" onClick={() => handleProjectClick(work)}>
              {work.w_name}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedProject.w_name}</h2>
            <br />
            <h4>Description:</h4>
            <p>{selectedProject.w_desc}</p>
            <br />
            <h4>Technologies Used:</h4>
            <ul>
              {selectedProject.w_technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
