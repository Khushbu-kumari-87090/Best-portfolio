import React from 'react';
import './Contact.css';
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { SiKaggle, SiMedium, SiZotero, SiTableau } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <hr className="underline" />

      <div className="email-section">
        <MdEmail size={20} className="email-icon" />
        <span>khushbukm358@gmail.com</span>
      </div>

      <div className="social-icons">
        <a href='../image/li.jpeg' target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href='../image/li.jpeg' target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href='../image/git.jpeg' target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href='../image/tw.jpeg'target="_blank" rel="noreferrer">
          <SiKaggle />
        </a>
        <a href='../image/yu.jpeg'target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        
        
        
      </div>
    </div>
  );
};

export default Contact;
