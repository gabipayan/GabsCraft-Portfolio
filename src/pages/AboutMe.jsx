// src/pages/AboutMe.jsx

import React from 'react';
import GabiImage from '../Images/Gabi-pink.png';

const AboutMe = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src={GabiImage}
          alt="Avatar"
          className="about-avatar"
        />
        <p className="about-text">
        I’m a Principal recruiter in the technology sector at Etsy, and passionate about starting my coding journey. With
                experience leading projects and teams, I’m eager to build innovative solutions and bring fresh
                perspectives to software development.        </p>
      </div>
    </section>
  );
};

export default AboutMe;