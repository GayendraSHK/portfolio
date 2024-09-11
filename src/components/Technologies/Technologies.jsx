/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './Technologies.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import react_icon from '../../assets/react.svg';
import typescript from '../../assets/typescript.svg';
import mysql from '../../assets/mysql.svg';
import css from '../../assets/css.svg';
import html from '../../assets/html.svg';
import nodejs from '../../assets/nodejs.svg';
import javascript from '../../assets/javascript.svg';

const Technologies = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add('animate');
                        observer.unobserve(section);
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 10% of the section is in view
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

  return (
    <div ref={sectionRef} id="technologies" className="technologies">
      <div className="technologies-title">
        <h1>Technologies</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="technologies-icons-container">
        <div className="icon-wrapper">
          <img src={react_icon} alt="React" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={typescript} alt="TypeScript" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={mysql} alt="MySQL" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={html} alt="HTML" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={css} alt="CSS" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={nodejs} alt="Node.js" className="icon" />
        </div>
        <div className="icon-wrapper">
          <img src={javascript} alt="JavaScript" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;