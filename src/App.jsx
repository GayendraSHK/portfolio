//import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Technologies from './components/Technologies/Technologies'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
//import EducationTimeline from './components/EducationTimeline/EducationTimeline'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <EducationTimeline/> */}
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App