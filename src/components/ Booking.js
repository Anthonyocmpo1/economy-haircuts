import React, { useState } from 'react';

function Booking() {
  const [name, setName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, appointmentDate }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your appointment has been booked successfully!');
      } else {
        setMessage(`Error: ${data.message || 'Failed to book appointment'}`);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('There was a problem booking your appointment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="appointment-date">Appointment Date:</label>
        <input
          type="date"
          id="appointment-date"
          name="appointment-date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
        <br />
        <button type="submit">Book Now</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Booking;
