/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './Technologies.css'; // Importing CSS for styling
import theme_pattern from '../../assets/theme_pattern.svg'; // Background pattern for the section
import react_icon from '../../assets/react.svg'; // React icon
import typescript from '../../assets/typescript.svg'; // TypeScript icon
import mysql from '../../assets/mysql.svg'; // MySQL icon
import css from '../../assets/css.svg'; // CSS icon
import html from '../../assets/html.svg'; // HTML icon
import nodejs from '../../assets/nodejs.svg'; // Node.js icon
import javascript from '../../assets/javascript.svg'; // JavaScript icon
import nextjs from '../../assets/nextjs.svg'; // Next.js icon

const Technologies = () => {
    const sectionRef = useRef(null); // Reference to the technologies section for IntersectionObserver

    useEffect(() => {
        const section = sectionRef.current; // Get the current reference of the section

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add('animate'); // Add animation class when section is in view
                        observer.unobserve(section); // Stop observing after animation triggers
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the section is in view
        );

        if (section) {
            observer.observe(section); // Start observing the section
        }

        return () => {
            if (section) observer.unobserve(section); // Clean up observer on component unmount
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div ref={sectionRef} id="technologies" className="technologies">
            {/* Section title and background pattern */}
            <div className="technologies-title">
                <h1>Technologies</h1> {/* Section title */}
                <img src={theme_pattern} alt="Pattern" /> {/* Background pattern image */}
            </div>

            <br /> {/* Line break for spacing */}

            {/* Container for technology icons */}
            <div className="technologies-icons-container">
                {/* Wrapper for each icon */}
                <div className="icon-wrapper">
                    <img src={html} alt="HTML" className="icon" /> {/* HTML icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={css} alt="CSS" className="icon" /> {/* CSS icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={react_icon} alt="React" className="icon" /> {/* React icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={typescript} alt="TypeScript" className="icon" /> {/* TypeScript icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={mysql} alt="MySQL" className="icon" /> {/* MySQL icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={nodejs} alt="Node.js" className="icon" /> {/* Node.js icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={javascript} alt="JavaScript" className="icon" /> {/* JavaScript icon */}
                </div>
                <div className="icon-wrapper">
                    <img src={nextjs} alt="Next.js" className="icon" /> {/* Next.js icon */}
                </div>
            </div>
        </div>
    );
};

export default Technologies;