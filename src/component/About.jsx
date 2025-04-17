import React from 'react';
import './About.css'; 
import myPhoto from '../image/yoga.avif'; // Update this with the correct path to your photo

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Khushbu Kumari" className="profile-photo" />
        
      </div>
</div>
  );
};

export default About;
