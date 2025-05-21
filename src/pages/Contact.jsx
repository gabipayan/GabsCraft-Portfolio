// src/pages/Contact.jsx
import React, { useState } from 'react';
import '../style.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // Limpiar errores personalizados al escribir
  e.target.setCustomValidity('');
};

const handleInvalid = (e) => {
  if (e.target.name === 'email') {
    e.target.setCustomValidity('Please enter a valid email address.');
  } else {
    e.target.setCustomValidity('This field is required.');
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación y envío del formulario
    alert('Message submitted! ✅');
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit" className="contact-button">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
