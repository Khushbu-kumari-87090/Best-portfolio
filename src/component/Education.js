import React from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    logo: '/images/cmu.png', // Place Carnegie Mellon logo here
    title: 'Master of Information Systems Management',
    university: 'Carnegie Mellon University',
    duration: '2021 - 2023'
  },
  {
    id: 2,
    logo: '/images/mumbai-university.png', // Place Mumbai University logo here
    title: 'Bachelor of Technology in Computer Engineering',
    university: 'University of Mumbai',
    duration: '2016 - 2020'
  }
];

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">EDUCATION</h2>
      <hr className="underline" />
      <div className="education-cards">
        {educationData.map((edu) => (
          <div className="edu-card" key={edu.id}>
            <div className="edu-logo-container">
              <img src={edu.logo} alt={edu.university} className="edu-logo" />
            </div>
            <div className="edu-details">
              <h3>{edu.title}</h3>
              <p className="edu-duration">{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
