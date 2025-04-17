import React from 'react';
import './Collaborations.css';

const collabData = [
  {
    id: 1,
    logo: '../image/coding.avif',
    title: "Google Cloud Next '25 Speaker",
    date: 'April 2025',
    bgColor: '#ffffff'
  },
  {
    id: 2,
    logo: '/image/yoga.avif',
    title: 'Guest Speaker',
    date: 'March 2025',
    bgColor: '#76b900'
  },
  {
    id: 3,
    logo: '/image/singing.avif',
    title: 'Guest Speaker',
    date: 'March 2025',
    bgColor: '#d6083b'
  }
];

const Collaborations = () => {
  return (
    <div className="collab-section">
      <h2 className="collab-title">Work Experience</h2>
      <hr className="collab-underline" />
      <div className="collab-cards">
        {collabData.map(collab => (
          <div className="collab-card" key={collab.id}>
            <div className="collab-card-top" style={{ backgroundColor: collab.bgColor }}>
            import profileImage from './image/girlscript.png';
            </div>
            <div className="collab-card-bottom">
              <p className="collab-subtitle">{collab.title}</p>
              <p className="collab-date">{collab.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
