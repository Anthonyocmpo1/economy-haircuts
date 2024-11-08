const nodemailer = require('nodemailer');

exports.bookAppointment = async (req, res) => {
  const { name, appointmentDate } = req.body;

  if (!name || !appointmentDate) {
    return res.status(400).json({ message: 'Name and appointment date are required' });
  }

  try {
    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com', // Yahoo SMTP server
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,  // Your Yahoo email from .env
        pass: process.env.EMAIL_PASS,  // App password from .env
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'salon-owner-email@example.com',  // Replace with salon owner's email
      subject: 'New Appointment Booking',
      text: `You have a new booking from ${name} for ${appointmentDate}.`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send booking notification' });
  }
};
