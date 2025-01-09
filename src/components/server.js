const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let bookings = []; // Store bookings in memory

const businessPhone = '346-241-1040';
const businessEmail = 'economyhaircuts@yahoo.com';

app.post('/api/bookings', (req, res) => {
  const { name, email, date, service } = req.body;

  if (!name || !email || !date || !service) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newBooking = { id: bookings.length + 1, name, email, date, service };
  bookings.push(newBooking);

  res.status(200).json({
    message: 'Booking confirmed',
    booking: newBooking,
    contact: { phone: businessPhone, email: businessEmail },
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
