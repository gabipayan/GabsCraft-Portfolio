// src/pages/AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src="path/to/avatar.jpg"
          alt="Avatar"
          className="about-avatar"
        />
        <p className="about-text">
          Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch Etsy authentic Marfa quinoa typewriter plaid direct trade small batch wayfarers bicycle rights cliche craft beer gastropub single-origin coffee Godard Carles you probably haven't heard of them irony pickled kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo scenester...
        </p>
      </div>
    </section>
  );
};

export default AboutMe;