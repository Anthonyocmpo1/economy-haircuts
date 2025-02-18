import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../App.css'; // Ensure correct path to styles

function Home({ logos, artwork }) {
  const [salonStatus, setSalonStatus] = useState('closed'); // Default status

  // List of holidays
  const holidays = useMemo(() => [
    { month: 0, day: 1 },  // January 1 - New Year's Day
    { month: 0, day: 20 }, // January 20 - Martin Luther King Day
    { month: 8, day: 1 },  // September 1 - Labor Day
    { month: 10, day: 27 }, // November 27 - Thanksgiving
    { month: 11, day: 24 }, // December 24 - Christmas Eve
    { month: 11, day: 25 }, // December 25 - Christmas Day
    { month: 11, day: 26 }, // December 26 - Boxing Day
  ], []);

  // Define operating hours
  const operatingHours = useMemo(() => ({
    0: { open: null, close: null }, // Sunday (closed)
    1: { open: "09:00", close: "14:30" }, // Monday
    2: { open: "09:00", close: "14:30" }, // Tuesday
    3: { open: "09:00", close: "14:30" }, // Wednesday
    4: { open: "09:00", close: "14:30" }, // Thursday
    5: { open: "09:00", close: "14:30" }, // Friday
    6: { open: "08:00", close: "19:00" }  // Saturday
  }), []);

  // Function to check salon status based on Texas time
  const checkSalonStatus = useCallback(() => {
    // Get current Texas (Central Time) date and time
    const texasTimeString = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    const texasTime = new Date(texasTimeString);

    const dayOfWeek = texasTime.getDay(); // 0 = Sunday, 6 = Saturday
    const currentHour = texasTime.getHours(); // 0-23
    const currentMinute = texasTime.getMinutes(); // 0-59

    console.log("Texas Time:", texasTime);
    console.log("Day of the Week:", dayOfWeek);
    console.log("Hour:", currentHour);
    console.log("Minute:", currentMinute);

    // Check if today is a holiday
    const isHoliday = holidays.some(
      (holiday) => holiday.month === texasTime.getMonth() && holiday.day === texasTime.getDate()
    );

    if (isHoliday) {
      console.log("It's a holiday, salon is closed.");
      setSalonStatus('closed');
      return;
    }

    // Get today's operating hours
    const hours = operatingHours[dayOfWeek];

    if (!hours.open || !hours.close) {
      console.log("Salon is closed today.");
      setSalonStatus('closed');
      return;
    }

    const [openHour, openMinute] = hours.open.split(':').map(Number);
    const [closeHour, closeMinute] = hours.close.split(':').map(Number);

    // Determine if the salon is open based on Texas time
    if (
      (currentHour > openHour || (currentHour === openHour && currentMinute >= openMinute)) &&
      (currentHour < closeHour || (currentHour === closeHour && currentMinute <= closeMinute))
    ) {
      console.log("Salon is open.");
      setSalonStatus('open');
    } else {
      console.log("Salon is closed.");
      setSalonStatus('closed');
    }
  }, [holidays, operatingHours]);

  useEffect(() => {
    checkSalonStatus();
    const interval = setInterval(checkSalonStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [checkSalonStatus]);

  // Function to render appropriate artwork based on status
  const renderArtwork = () => {
    switch (salonStatus) {
      case 'open':
        return <img src='/image/salon-open.jpg' alt='Salon Open' className="artwork-image" />;
      case 'closed':
        return <img src='/image/salon-closed.jpg' alt='Salon Closed' className="artwork-image" />;
      default:
        return <img src='/image/salon-closed.jpg' alt='Salon Closed' className="artwork-image" />;
    }
  };

  

  return (
    <div className="app">
       <h2>Welcome to Economy Hair Cuts!</h2>
      <p>Your one-stop destination for personalized unisex services catering to clients of all ages. Whether you're looking for stylish hair color, precision haircuts, or waxing and grooming services, we are dedicated to helping you look and feel your best.</p>
      <p>From fresh haircuts and relaxing treatments to special styling for memorable events, our talented team is here to deliver exceptional results tailored just for you.</p>
      <p>Our skilled and creative stylists stay up-to-date with the latest trends and techniques, ensuring you receive a look that perfectly complements your unique style and personality.</p>

      <p>Come visit us today and experience a welcoming space where beauty, style, and relaxation come together. Let us help transform your look and elevate your confidence!</p>

      <div className="image-container">
        <img src='/image/logo1.jpg' alt='Logo 1' className="large-image" />
      </div>

      <section id="artwork">
        <div className="image-container">{renderArtwork()}</div>
      </section>

      <section id="salon-time">
        <h3>Current Salon Status</h3>
        <p>Salon is currently: <strong>{salonStatus.toUpperCase()}</strong></p>
      </section>

      <section id="operating-hours">
        <h3>Operating Hours</h3>
        <table className="operating-hours-table">
          <thead>
            <tr><th>Day</th><th>Hours</th></tr>
          </thead>
          <tbody>
            <tr><td>Monday</td><td>9:00 AM - 2:30 PM</td></tr>
            <tr><td>Tuesday</td><td>9:00 AM - 2:30 PM</td></tr>
            <tr><td>Wednesday</td><td>9:00 AM - 2:30 PM</td></tr>
            <tr><td>Thursday</td><td>9:00 AM - 2:30 PM</td></tr>
            <tr><td>Friday</td><td>9:00 AM - 2:30 PM</td></tr>
            <tr><td>Saturday</td><td>8:00 AM - 7:00 PM</td></tr>
            <tr><td>Sunday</td><td>Closed</td></tr>
            <tr><td>*AFTER HOURS MONDAY - FRIDAY BY APPOINTMENTS*</td></tr>
          </tbody>
        </table>
      </section>

      <div className="booking-section">
        <a href="https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services" target="_blank" rel="noopener noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;