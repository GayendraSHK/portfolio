/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';
import Typed from 'typed.js'; // Import the 'Typed' library

const About = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "I am a highly motivated and enthusiastic IT undergraduate at the University of Moratuwa, driven by a passion for technology and a commitment to excellence. With a solid academic background and strong technical skills, I thrive in dynamic environments where I can tackle challenges and continuously grow.<br /><br />Eager to expand my knowledge and stay at the forefront of emerging technologies, I am dedicated to contributing to innovative, impactful projects. Whether working independently or as part of a team, I focus on delivering high-quality results and making a meaningful impact in the ever-evolving world of technology."
            ],
            typeSpeed: 5,
            backSpeed: 0,
            loop: false,
            showCursor: false, // Disable the blinking cursor
            preStringTyped: function (arrayPos, self) {
                self.el.innerHTML = self.strings[arrayPos];
            }
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

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
                        <p ref={typedRef}></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
