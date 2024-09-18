// Importing React library and component modules
// import React from 'react'; // Uncomment if needed for older versions of React

// Importing component modules for different sections of the application
import About from './components/About/About'; // Component for the About section
import Contact from './components/Contact/Contact'; // Component for the Contact section
import Footer from './components/Footer/Footer'; // Component for the footer of the page
import Hero from './components/Hero/Hero'; // Component for the hero section (e.g., landing section)
import Technologies from './components/Technologies/Technologies'; // Component displaying technologies used
import Navbar from './components/Navbar/Navbar'; // Component for the navigation bar
import Projects from './components/Projects/Projects'; // Component showcasing projects
// import EducationTimeline from './components/EducationTimeline/EducationTimeline'; // Uncomment to include the Education Timeline section

const App = () => {
  return (
    <div>
      {/* Render the Navbar component at the top of the page */}
      <Navbar/>

      {/* Render the Hero section, typically for a welcome message or introduction */}
      <Hero/>

      {/* Render the About section to provide information about the person */}
      <About/>

      {/* Render the Education section to provide information about the person's Education */}
      {/* <EducationTimeline/> */}

      {/* Render the Technologies section to showcase the technologies used */}
      <Technologies/>

      {/* Render the Projects section to display various projects */}
      <Projects/>

      {/* Render the Contact section for users to get in touch */}
      <Contact/>

      {/* Render the Footer component, usually for additional information or links */}
      <Footer/>
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application