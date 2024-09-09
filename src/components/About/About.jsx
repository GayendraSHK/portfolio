//import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                    I am a highly motivated and enthusiastic IT undergraduate at the University of Moratuwa, driven by a 
                    passion for technology and a commitment to excellence. With a solid academic background and strong 
                    technical skills, I thrive in dynamic environments where I can tackle challenges and continuously grow.
                    </p>
                    <p>
                    Eager to expand my knowledge and stay at the forefront of emerging technologies, I am dedicated to 
                    contributing to innovative, impactful projects. Whether working independently or as part of a team, I focus on 
                    delivering high-quality results and making a meaningful impact in the ever-evolving world of technology.
                    </p>
                </div>
                {/* <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"} }/></div>
                    <div className="about-skill"><p>React Js </p><hr style={{width:"70%"} }/></div>
                    <div className="about-skill"><p>JavaScript </p><hr style={{width:"60%"} }/></div>
                    <div className="about-skill"><p>Next Js </p><hr style={{width:"40%"} }/></div>
                </div> */}
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div> */}
    </div>
  )
}

export default About