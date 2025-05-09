// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>
      <a href="path/to/resume.pdf" download className="resume-download">
        Download My Resume
      </a>
      <ul className="proficiencies-list">
        <li>
          <strong>Front-end Proficiencies</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </li>

        <li>
          <strong>Back-end Proficiencies</strong>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Resume;