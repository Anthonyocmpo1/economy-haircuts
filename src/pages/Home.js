import React, { useState, useEffect } from 'react';
import '../App.css';  // Correct path to App.css

function Home({ images, logos, artwork }) {
  // State to manage salon's open/closed status
  const [salonStatus, setSalonStatus] = useState('closed'); // Default to 'closed'

  // Function to determine if the salon is open, closed, or in another state
  const checkSalonStatus = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();  // Get current hour

    // Assuming salon is open from 9 AM to 2:30 PM (Mon-Fri), 8 AM to 7 PM (Sat), Closed on Sunday
    const dayOfWeek = currentDate.getDay(); // Sunday is 0, Saturday is 6

    if (dayOfWeek === 0) {
      setSalonStatus('closed'); // Sunday: Closed
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (currentHour >= 9 && currentHour < 14) {
        setSalonStatus('open'); // Monday to Friday: 9 AM to 2:30 PM
      } else {
        setSalonStatus('closed');
      }
    } else if (dayOfWeek === 6) {
      if (currentHour >= 8 && currentHour < 19) {
        setSalonStatus('open'); // Saturday: 8 AM to 7 PM
      } else {
        setSalonStatus('closed');
      }
    }
  };

  useEffect(() => {
    checkSalonStatus(); // Check the salon status when the component mounts

    // Check every minute to update the status automatically
    const interval = setInterval(checkSalonStatus, 60000); // Every minute

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Logic to display images based on salon status
  const renderArtwork = () => {
    switch (salonStatus) {
      case 'open':
        return <img src='/image/salon-open.jpg' alt='Salon Open' className="artwork-image" />;
      case 'closed':
        return <img src='/image/salon-closed.jpg' alt='Salon Closed' className="artwork-image" />;
      case 'on-leave':
        return <img src='/image/salon-on-leave.jpg' alt='On Leave' className="artwork-image" />;
      case 'stepped-out':
        return <img src='/image/salon-stepped-out.jpg' alt='Just Stepped Out' className="artwork-image" />;
      default:
        return <img src='/image/salon-closed.jpg' alt='Salon Closed' className="artwork-image" />;
    }
  };

  return (
    <div className="app">
      {/* Navbar Section */}
      <h2>Welcome to Economy Hair Cuts!</h2>
<p>Your one-stop destination for personalized unisex services catering to clients of all ages. Whether you're looking for stylish hair color, precision haircuts, or waxing and grooming services, we are dedicated to helping you look and feel your best.</p>
<p>From fresh haircuts and relaxing treatments to special styling for memorable events, our talented team is here to deliver exceptional results tailored just for you.</p>
<p>Our skilled and creative stylists stay up-to-date with the latest trends and techniques, ensuring you receive a look that perfectly complements your unique style and personality.</p>
<p>Come visit us today and experience a welcoming space where beauty, style, and relaxation come together. Let us help transform your look and elevate your confidence!</p>



      <section id="logos">
         {/* <h2>Our Logos</h2> */}
         <div className="image-container">
         <img src='/image/logo1.jpg' alt='Logo 1' className="large-image" />
         {/* <img src='/image/logo2.jpg' alt='Logo 2' className="large-image" /> */}
           </div>
    </section>


      <section id="salon">
        {/* <h2>Our Salon Interior</h2> */}
        <div className="image-container">
        <img src='/image/salon.jpeg' alt='interior1' className="large-image" />;
        <img src='/image/interior2.jpeg' alt='interior1' className="large-image" />;
        <img src='/image/interior3.jpeg' alt='interior1' className="large-image" />;
        <img src='/image/interior4.jpeg' alt='interior1' className="large-image" />;
        <img src='/image/interior5.jpeg' alt='interior1' className="large-image" />;
        {/* <img src='/image/interior6.jpeg' alt='interior1' className="large-image" />; */}
         </div>
      </section>

      <section id="artwork">
        {/* <h2>Artwork & Style</h2> */}
        <div className="image-container">
          {renderArtwork()}
        </div>
      </section>

      {/* <section id="haircuts">
        <h2>Our Haircut Styles</h2>
        <div className="image-container">
          {artwork.map((item, index) => (
            <img key={index} src={item} alt={`Haircut Style ${index + 1}`} className="large-image" />
          ))}
        </div>
      </section> */}

      <section id="salon-time">
        <h3>Current Salon Status</h3>
        <p>Salon is currently: {salonStatus}</p>
      </section>
    </div>
  );
}

export default Home;
