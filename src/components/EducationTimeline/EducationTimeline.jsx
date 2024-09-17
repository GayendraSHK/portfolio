/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './EducationTimeline.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const EducationTimeline = () => {
  const timelineRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const educationData = [
    { year: "2022", title: "BSc. (Hons) in Information Technology", institution: "University of Moratuwa" },
    { year: "2020", title: "Advanced Level Examination", institution: "Rahula College, Matara" },
    { year: "2015", title: "Ordinary Level Examination", institution: "Rahula College, Matara" },
  ];

  useEffect(() => {
    const section = educationRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-education');
            observer.unobserve(section); // Stop observing after the animation triggers
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div ref={educationRef} id='education' className='education'>
      <div className="timeline-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <br />
      <div className="timeline" ref={timelineRef}>
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-heading">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
