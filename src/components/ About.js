import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h2 className="header">About Us</h2>
      <p className="sub-header">Welcome to Economy Haircuts, where beauty meets experience!</p>

      <div className="about-content">
        <p className="about-text">
          At Economy Haircuts, we pride ourselves on providing top-notch haircuts and grooming services to individuals and families. 
          Our team of expert stylists is dedicated to ensuring you leave our salon feeling your best. Whether you're here for a trim, 
          a new style, or a full makeover, we’ve got you covered!
        </p>

        <p className="about-text">
          We’ve been serving the community in Texas, offering quality and affordable services in a comfortable and 
          welcoming environment. Our mission is simple: to provide excellent service with a smile, while keeping our prices affordable 
          for everyone.
        </p>

        <div className="team-section">
          <h3 className="info-header">Meet Our Team</h3>
          <p className="about-text">
            Our team is made up of experienced professionals who are passionate about hair and beauty. We keep up with the latest trends 
            and techniques to ensure that every client walks out feeling refreshed and satisfied.
          </p>
          {/* <ul className="team-list">
            <li>John Doe - Lead Stylist & Owner</li>
            <li>Jane Smith - Senior Stylist</li>
            <li>Mary Johnson - Junior Stylist</li>
            <li>Mike Williams - Barber</li>
          </ul> */}
        </div>

        <div className="mission-section">
          <h3 className="info-header">Our Mission</h3>
          <p className="about-text">
            We are committed to making every client feel welcome and valued. Our mission is to create a space where clients of all ages 
            and backgrounds can enjoy high-quality grooming at affordable prices. We believe that everyone deserves to feel great, 
            and we are here to make that happen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
