// src/components/Project.jsx
import React from 'react';
import './project.css'; //  for styling

const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project-item">
      <React.Fragment>
        <h3>AtmosPredict</h3>
        <div className="image-container">
          <img
            src="src/Images/Weather Dashboard.png"
            alt="AtmosPredict"
          />
          <div className="overlay">
            <a href="https://atmospredict.onrender.com/" target="_blank" rel="noopener noreferrer">View App</a>
            <a href="https://github.com/gabipayan/AtmosPredict" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </React.Fragment>
      <React.Fragment>
        <h3>GreetingsGalaxy</h3>
        <div className="image-container">
          <img
            src="src/Images/GreetingsG.png" 
            alt="AtmosPredict" 
          />
          <div className="overlay">
            <a href="https://atmospredict.onrender.com/" target="_blank" rel="noopener noreferrer">View App</a> |{' '}
            <a href="https://github.com/gabipayan/AtmosPredict" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};


export default Project;
