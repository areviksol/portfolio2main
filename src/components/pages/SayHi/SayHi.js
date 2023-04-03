import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./SayHi.css"

const SayHi = () => {
  const formRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const cubeStyle = {
    transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log('Submitting form...');
    event.preventDefault();
    // Send message to your email
    emailjs.sendForm('service_ik3njpq', 'template_hltbvjj', formRef.current, 'p0tB_6ZYAyljWzsoX')
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="gen-form-wrap" onMouseMove={handleMouseMove}>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
      </div>
  );
};

export default SayHi;
