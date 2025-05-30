// src/components/Project.jsx
import React from 'react';
import './Project.css'; //  for styling
import weatherImg from '../Images/Weather Dashboard.png';
import greetingsImg from '../Images/GreetingsG.png';


const Project = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project-item">
      <React.Fragment>
        <h3>AtmosPredict</h3>
        <div className="image-container">
          <img
            src={weatherImg}
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
            src={greetingsImg} 
            alt="GreetingsGalaxy" 
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
