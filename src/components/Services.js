import React, { useState } from "react";

function Services() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCheckIn = () => {
    setIsCheckedIn(!isCheckedIn);
  };

  const handleServiceSelection = (serviceName) => {
    setService(serviceName);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !date || !service) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, date, service }),
      });

      if (response.ok) {
        setBookingConfirmed(true);
        setLoading(false);
      } else {
        throw new Error("Booking failed.");
      }
    } catch (error) {
      alert("Error: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      {/* Check-in Button */}
      <div className="check-in">
        <button className="check-in-btn" onClick={toggleCheckIn}>
          {isCheckedIn ? "Hide Services" : "Check-in"}
        </button>
      </div>

      {isCheckedIn && (
        <div className="service-categories">
          {/* Organize services */}
          <div className="service-row">
            <div className="service-category">
              <h2>Hair Cuts Services</h2>
              <ul>
                <li>Economy cut - 20 mins</li>
                <li>Kids haircut - 20 mins</li>
                <li>Buzz cut one guard - 10 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Hair Cuts")}
              >
                Book Now
              </button>
            </div>

            <div className="service-category">
              <h2>Shampoo Services</h2>
              <ul>
                <li>Shampoo & conditioner (short hair) - 10 mins</li>
                <li>Tea tree experience - 30 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() =>
                  handleServiceSelection("Shampoo Hair Services")
                }
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Color Services</h2>
              <ul>
                <li>All over color up to shoulder length - 75 mins</li>
                <li>Partial highlights up to 10 foils - 65 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Color Services")}
              >
                Book Now
              </button>
            </div>

            <div className="service-category">
              <h2>Chemical Services</h2>
              <ul>
                <li>Full perm - 120 mins</li>
                <li>Relaxer retouch - 60 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Chemical Services")}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Treatment Services</h2>
              <ul>
                <li>Deep keratin treatment - 45 mins</li>
                <li>Hot oil treatment - 45 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Treatment Services")}
              >
                Book Now
              </button>
            </div>

            <div className="service-category">
              <h2>Style Services</h2>
              <ul>
                <li>Blow dry - 30 mins</li>
                <li>Flat iron - 30 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Style Services")}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Silk Press</h2>
              <ul>
                <li>Silk Press (price depends on hair length & thickness) - starts at $120</li>
                <li>
                  Silk Press Level A (includes shampoo, deep conditioner, and
                  trim) - 80 mins
                </li>
                <li>
                  Silk Press Level B (includes shampoo, deep conditioning, and
                  deep treatment) - 120 mins
                </li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Silk Press")}
              >
                Book Now
              </button>
            </div>

            <div className="service-category">
              <h2>Waxing Services</h2>
              <ul>
                <li>Full facial wax - 45 mins - $45</li>
                <li>Chin wax - 10 mins</li>
                <li>Mustache wax - 10 mins</li>
                <li>Eyebrow wax - 10 mins</li>
              </ul>
              <button
                className="book-btn"
                onClick={() => handleServiceSelection("Waxing Services")}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Booking Form */}
          {service && (
            <form className="booking-form" onSubmit={handleBookingSubmit}>
              <h3>Book your {service}</h3>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Booking..." : "Submit Booking"}
              </button>
            </form>
          )}

          {/* Booking Confirmation */}
          {bookingConfirmed && (
            <div className="booking-confirmation">
              <h3>Your booking has been confirmed!</h3>
              <p>
                Thank you for booking your {service}. We will contact you soon.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Services;
