import React, { useState } from 'react';

// Booking Form Component
function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !date || !service) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // Make the POST request to the backend API
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, date, service }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking: ' + response.statusText);
      }

      const data = await response.json();
      console.log(data);  // Log the response data from the backend

      setBookingConfirmed(true);  // Show confirmation message
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Appointment</h2>
      {bookingConfirmed ? (
        <p>Booking confirmed! We will contact you shortly.</p>
      ) : (
        <form onSubmit={handleBookingSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Appointment Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service:</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              <option value="Silk Press Level A">Silk Press Level A</option>
              <option value="Silk Press Level B">Silk Press Level B</option>
              <option value="Full Facial Wax">Full Facial Wax</option>
              <option value="Chin Wax">Chin Wax</option>
              <option value="Eyebrow Wax">Eyebrow Wax</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Booking...' : 'Submit Booking'}
          </button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
