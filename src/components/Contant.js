import React from 'react';

const Contact = () => {
  

  return (
    <div className="contact-container">
      {/* Location Information */}
      <div className="location-info">
        <div className="location-header">
          <p className="location-details">
            <strong>Located at:</strong> 4055 Village Drive, Pearland, Texas, inside Attiva 55 and Up management office. We’re at the back, or you can follow the signs to the side gate. Call{' '}
            <a href="tel:+13465088211">346-508-8211</a> or{' '}
            <a href="tel:+13462411040">346-241-1040</a>, and we will open the gate for you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h3 className="info-header">Our Contact Information</h3>
        <p>
          Phone: <a href="tel:+13462411040">346-241-1040</a> or{' '}
          <a href="tel:+13465088211">346-508-8211</a>
        </p>
        <p>
          Email: <a href="mailto:economyhaircuts@yahoo.com">economyhaircuts@yahoo.com</a>
        </p>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <h3>Find Us Here:</h3>
        <iframe
          title="Pearland Texas Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.734482117335!2d-95.24826968441816!3d29.561609082070396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e329ff9dc073%3A0xf5c0844e4f309d08!2s4055%20Village%20Dr%2C%20Pearland%2C%20TX%2077581%2C%20USA!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske"
          width="100%"
          height="400px"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Flyers Section */}
      <div className="flyers-section">
        <h3>Check Out Our Flyers</h3>
        <div className="flyer-container">
          {/* Flyer Image */}
          <img
            src="/image/EconoHair .jpg"
            alt="Economy Haircuts Flyer"
            className="flyer-image"
          />
         <a
  href="/file/EconoHair Flyer(1).pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="download-link"
>
  Download Flyer (PDF)
</a>

        </div>
      </div>

      {/* Book Now Section */}
      <div className="booking-section">
        <a href="https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services" target="_blank" rel="noopener noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
