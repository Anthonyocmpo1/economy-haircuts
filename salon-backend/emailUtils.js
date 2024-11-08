const nodemailer = require('nodemailer');

// This function sends the email with booking details
const sendBookingEmail = async (name, appointmentDate) => {
  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',  // Yahoo SMTP server
      port: 465,                    // SSL Port for Yahoo
      secure: true,                  // Use SSL
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender's address
      to: 'salon-owner-email@example.com',  // Recipient's address (the salon owner)
      subject: 'New Appointment Booking',
      text: `You have a new booking from ${name} for ${appointmentDate}.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Booking email sent successfully!');
  } catch (error) {
    console.error('Error sending booking email:', error);
    throw new Error('Failed to send booking notification');
  }
};

module.exports = { sendBookingEmail };
