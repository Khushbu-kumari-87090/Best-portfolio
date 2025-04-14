import React from 'react';
import './About.css'; 
import myPhoto from '../image/img.jpg'; // Update this with the correct path to your photo

const About = () => {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={myPhoto} alt="Khushbu Kumari" className="profile-photo" />
        <p>
          Hi, I'm <strong>Khushbu Kumari</strong> — a passionate and skilled Full Stack Java Developer with hands-on
          experience in building scalable applications and solving real-world problems through technology. I love
          working across the stack and exploring emerging domains like Data Science and Product Management.
        </p>
      </div>

      <h3>Skills</h3>
      <ul>
        <li><strong>Programming Languages:</strong> C, C++, Java, Python, SQL</li>
        <li><strong>Web Technologies:</strong> HTML, CSS3, JavaScript,React, jQuery, Bootstrap, MongoDB, Express, Angular, Node.js</li>
        <li><strong>Analytics and ML:</strong> NumPy, Pandas, TensorFlow, Scikit-learn</li>
      </ul>

      <h3>Tools</h3>
      <ul>
        <li><strong>Database Tools:</strong> MySQL, MongoDB</li>
        <li><strong>Visualization Tools:</strong> Tableau, Python Libraries</li>
        <li><strong>Automation:</strong> Selenium</li>
        <li><strong>Mobile App Development:</strong> Dart, Flutter, Android app development</li>
      </ul>

      <h3>Domains</h3>
      <ul>
        <li>Data Science</li>
        <li>Full Stack Developer</li>
        <li>Product Management</li>
      </ul>
    </div>
  );
};

export default About;
