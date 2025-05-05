// src/components/Project.jsx
import React from 'react';
import './Project.css'; // Assuming you have a CSS file for styling

const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project-item">
      <h3>AtmosPredict</h3>
      <img src="src/Images/Weather Dashboard.png" alt="AtmosPredict" style={{ width: '20%', borderRadius: '8px', margin: '10px 0' }} />
      <p>
        <a href="https://atmospredict.onrender.com/" target="_blank" rel="noopener noreferrer">View App</a> |{' '}
        <a href="https://github.com/gabipayan/AtmosPredict" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
      <h3>GreetingsGalaxy</h3>
      <img src="src/Images/GreetingsG.png" alt="AtmosPredict" style={{ width: '20%', borderRadius: '8px', margin: '10px 0' }} />
      <p>
        <a href="https://atmospredict.onrender.com/" target="_blank" rel="noopener noreferrer">View App</a> |{' '}
        <a href="https://github.com/gabipayan/AtmosPredict" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
};

export default Project;