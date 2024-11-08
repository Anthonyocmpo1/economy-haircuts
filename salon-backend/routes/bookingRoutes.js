const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST route to handle booking
router.post('/bookings', bookingController.bookAppointment);

module.exports = router;
