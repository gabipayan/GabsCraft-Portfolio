// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    // Añade tus proyectos aquí
    { title: 'Proyecto 1', image: 'path/to/image1.jpg', appLink: '#', repoLink: '#' },
    // ...
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;