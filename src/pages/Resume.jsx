// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Añade más habilidades */}
      </ul>
    </section>
  );
};

export default Resume;