import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../App.css'; // Ensure correct path to styles
import { Button, Col, Container, Row,Card  } from 'react-bootstrap';
import { FaCheckCircle,FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Home({ logos, artwork }) {
  const [salonStatus, setSalonStatus] = useState('closed'); // Default status

  const services = [
    {
      title: "Hair Cuts Services",
      description: "Trendy haircuts and styling tailored to your needs.",
      img: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
    },
    {
      title: "Shampoo Services",
      description: "Professional hair coloring with a range of shades.",
      img: "https://images.pexels.com/photos/3065173/pexels-photo-3065173.jpeg",
    },
    {
      title: "Color Services",
      img: "/image/Color.jpeg",
      alt: "Color",
      name: "Color",
    },
    {
      title: "Chemical Services",
      description: "Full-body grooming and waxing services for all genders.",
      img: "https://images.pexels.com/photos/3065173/pexels-photo-3065173.jpeg",
    },
    {
      title: "Treatment Services",
      img: "/image/Curry hair cut and treatments.jpeg",
  alt: "Carry Haircut and Treatment",
  name: "Carry Haircut and Treatment",
    },
    {
      title: "Style Services",
      description: "Full-body grooming and waxing services for all genders.",
      img: "https://images.pexels.com/photos/3065173/pexels-photo-3065173.jpeg",
    },
    {
      title: "Silk Press / price",
      description: "Full-body grooming and waxing services for all genders.",
      img: "https://images.pexels.com/photos/3065173/pexels-photo-3065173.jpeg",
    },
    {
      title: "Waxing Services / price",
      description: "Full-body grooming and waxing services for all genders.",
      img: "https://images.pexels.com/photos/3065173/pexels-photo-3065173.jpeg",
    },

    
  ];


  const galleryImages = [
    { src: '/image/salon.jpeg', alt: 'Interior 1', name: 'Salon Interior 1' },

    { src: '/image/interior3.jpeg', alt: 'Interior 3', name: 'Salon Interior 3' },
    { src: '/image/interior4.jpeg', alt: 'Interior 4', name: 'Salon Interior 4' },
    { src: '/image/interior5.jpeg', alt: 'Interior 5', name: 'Salon Interior 5' },
    { src: '/image/Curry hair cut and treatments.jpeg', alt: 'Carry Haircut and Treatment', name: 'Carry Haircut and Treatment' },
    { src: '/image/Perm and trim shape up.jpeg', alt: 'Perm and Trim Shape Up', name: 'Perm and Trim Shape Up' },
    { src: '/image/Hair cut, scissors or clippers.jpeg', alt: 'Haircut with Scissors or Clippers', name: 'Haircut with Scissors or Clippers' },
    { src: '/image/Fade.jpeg', alt: 'Fade', name: 'Fade' },
    { src: '/image/Wig cut and style.jpeg', alt: 'Wig Cut and Style', name: 'Wig Cut and Style' },
    { src: '/image/Wig cut, and style.jpeg', alt: 'Wig Cut and Style', name: 'Wig Cut and Style' },
    { src: '/image/Flat iro.jpeg', alt: 'Flat Iron', name: 'Flat Iron' },
    { src: '/image/Hair cut for short hair.jpeg', alt: 'Hair Cut for Short Hair', name: 'Hair Cut for Short Hair' },
   
    { src: '/image/Men hair cut, fade.jpeg', alt: 'Men Haircut Fade', name: 'Men Haircut Fade' },
    { src: '/image/Beard trim and edgin.jpeg', alt: 'Beard Trim and Edging', name: 'Beard Trim and Edging' },
    { src: '/image/Beard trim and edging.jpeg', alt: 'Beard Trim and Edging', name: 'Beard Trim and Edging' }

  ];

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
    // <div className="app">
    //    <h2>Welcome to Economy Hair Cuts!</h2>
    //   <p>Your one-stop destination for personalized unisex services catering to clients of all ages. Whether you're looking for stylish hair color, precision haircuts, or waxing and grooming services, we are dedicated to helping you look and feel your best.</p>
    //   <p>From fresh haircuts and relaxing treatments to special styling for memorable events, our talented team is here to deliver exceptional results tailored just for you.</p>
    //   <p>Our skilled and creative stylists stay up-to-date with the latest trends and techniques, ensuring you receive a look that perfectly complements your unique style and personality.</p>

    //   <p>Come visit us today and experience a welcoming space where beauty, style, and relaxation come together. Let us help transform your look and elevate your confidence!</p>

    //   <div className="image-container">
    //     <img src='/image/logo1.jpg' alt='Logo 1' className="large-image" />
    //   </div>

    //   <section id="artwork">
    //     <div className="image-container">{renderArtwork()}</div>
    //   </section>

    //   /

    //   <div className="booking-section">
    //     <a href="https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services" target="_blank" rel="noopener noreferrer">
    //       <button className="booking-btn">
    //         Book Now
    //       </button>
    //     </a>
    //   </div>
    // </div>
    <>
     <div className="row-1-home" >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
            <h1>Welcome to Economy Hair Cuts!</h1>
            <p>Your one-stop destination for personalized unisex services catering to clients of all ages. Whether you're looking for stylish hair color or waxing and grooming services </p>
          <p>Come visit us today and experience a welcoming space where beauty, style, and relaxation come together. Let us help transform your look and elevate your confidence!</p>

            <div>
              <Button href='https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services' target="_blank" className="mx-2" style={{ background: "#744A73", border: "none", outline: "none" }}>
                Book Now
              </Button>

              <Button variant="outline-dark">Get Started</Button>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <img
              style={{ borderRadius: "20px", maxWidth: "100%", height: "auto" }}
              src="https://t4.ftcdn.net/jpg/04/69/68/17/360_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg"
              alt="Salon Service"
            />
          </Col>
        </Row>
      </Container>
    </div>

    <div className='my-2' id="home">
    <div class="big-image">
  <div class="overlay">
    <Container>
   <Row>
   
    <Col md={6}>
    <img className='w-100' src="https://metropolitanhost.com/themes/templatemoster/html/powar/hstyle/assets/img/home-1/570x460.jpg" />
    </Col>

    <Col className='px-2 d-flex flex-column justify-content-center text-center text-md-start' md={6}>
    <h2 style={{fontSize: "50px !important"}}>Hair Loss Treatments For Men & Women </h2>
    <span>Hair transplantation provides natural and undetectable results Just like your old hair, you can dye, perm, and cut your transplanted hair with no worries.</span>
    </Col>

   </Row>
   </Container>
  </div>
</div>
   
  </div>

  <div className="our-services  py-2" id="services">
      <Container>
        {/* Section Title */}
        <h2 className="text-center mb-4">Our Services</h2>

        {/* Services Cards */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="service-card">
                <Card.Img variant="top" src={service.img} alt={service.title} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .service-card {
          transition: transform 0.3s ease-in-out;
          border-radius: 10px;
          overflow: hidden;
        }

        .service-card:hover {
          transform: scale(1.05);
          cursor:pointer;
        }
      `}</style>
    </div>

    <div className="gallery-section py-5" id="gallery">
  <Container>
    {/* Section Title */}
    <h2 className="text-center mb-4">Our Gallery</h2>

    {/* Gallery Grid */}
    <Row className="g-3">
      {galleryImages.map((image, index) => (
        <Col key={index} md={4} sm={6} xs={12}>
          <div className="gallery-item">
            <img src={image.src} alt={image.alt} className="img-fluid" />
          </div>
        </Col>
      ))}
    </Row>
  </Container>

  {/* Custom Styles */}
  <style jsx>{`
    .gallery-item {
      overflow: hidden;
      border-radius: 10px;
      width: 100%;
      height: 250px; /* Set a fixed height */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures uniform image fit */
      transition: transform 0.3s ease-in-out;
    }

    .gallery-item:hover img {
      transform: scale(1.05);
    }
  `}</style>
</div>


    <div className="contact-section py-5" id="contact">
      <Container>
        {/* Section Title */}
        <h2 className="text-center mb-4">Contact Us</h2>

        <Row className="align-items-center">
          {/* Office Details */}
          <Col md={6}>
            <div className="contact-details">
              <h4>Our Office</h4>
              <p><FaMapMarkerAlt className="icon" />  4055 Village Drive, Pearland, Texas, inside Attiva 55 and Up management office. We’re at the back, or you can follow the signs to the side gate.</p>
              <p><FaPhone className="icon" />  346-241-1040 or 346-508-8211

</p>
              <p><FaEnvelope className="icon" /> economyhaircuts@yahoo.com</p>
            </div>
          </Col>

          {/* Google Map */}
          <Col md={6}>
  <div className="map-container">
    <iframe
      title="Economy Haircuts Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.460385491952!2d-95.26774362388831!3d29.532084175185453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640916bc4d2e347%3A0x2f418d28f59ddcad!2sEconomy%20haircuts!5e0!3m2!1sen!2ske!4v1740084599966!5m2!1sen!2ske"
      width="100%"
      height="400px"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <p className="map-description">
      Visit us at <strong>Economy Haircuts</strong>, located inside the{" "}
      <strong>Attiva 55 and Up</strong> management office at{" "}
      <strong>4055 Village Dr, Pearland, TX 77581</strong>. We're situated at the
      back; follow the signs to the side gate for easy access.
    </p>
  </div>

  <style jsx>{`
    .map-container {
      text-align: center;
      margin-top: 20px;
    }

    .map-description {
      margin-top: 10px;
      font-size: 16px;
      color: #555;
    }
  `}</style>
</Col>


        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .contact-details p {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          margin: 10px 0;
        }

        .contact-details .icon {
          color: #744A73;
          font-size: 1.2rem;
        }

        // .map-container {
        //   border-radius: 10px;
        //   overflow: hidden;
        //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>

    </>
  
  );
}

export default Home;