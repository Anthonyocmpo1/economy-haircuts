import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    // Here you would normally send the form data to your server
    console.log('Form submitted:', formData);

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setIsSubmitted(true); // Set the form submission state
    setError('');
  };

  return (
    <div className="contact-container">
      <h2 className="header">Contact Us</h2>
      <p className="sub-header">If you have any questions, feel free to get in touch!</p>

      {/* Display error or success message */}
      {error && <p className="error">{error}</p>}
      {isSubmitted && !error && (
        <p className="success">Your message has been sent successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="textarea"
          />
        </div>
        <button type="submit" className="button">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <h3 className="info-header">Our Location</h3>
        <p>Texas, USA</p>
        <p>Phone: <a href="tel:+13462411040">346-241-1040</a> or <a href="tel:+13465088211">346-508-8211</a></p>
        <p>Email: <a href="mailto:economyhaircuts@yahoo.com">economyhaircuts@yahoo.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
