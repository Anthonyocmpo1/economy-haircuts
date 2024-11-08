const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendBookingEmail } = require('./utils/emailUtils');  // Import the email utility

const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Enable CORS for local development
app.use(bodyParser.json());  // Parse JSON bodies

// POST endpoint for booking appointments
app.post('/api/bookings', async (req, res) => {
  const { name, appointmentDate } = req.body;

  // Validate input
  if (!name || !appointmentDate) {
    return res.status(400).json({ message: 'Name and appointment date are required' });
  }

  try {
    // Call the sendBookingEmail function from the emailUtils.js file
    await sendBookingEmail(name, appointmentDate);

    // Send a success response
    res.status(200).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Booking failed:', error);
    res.status(500).json({ message: 'Failed to send booking notification' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
