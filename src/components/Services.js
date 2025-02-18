import React from "react";

function Services() {
 

  // const toggleCheckIn = () => {
  //   setIsCheckedIn(!isCheckedIn);
  // };

  

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      {/* Check-in Button */}
      {/* <div className="check-in">
        <button className="check-in-btn" onClick={toggleCheckIn}>
          {isCheckedIn ? "Hide Services" : "Check-in"}
        </button>
      </div> */}

      {/* {isCheckedIn && ( */}
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
            </div>

            <div className="service-category">
              <h2>Shampoo Services</h2>
              <ul>
                <li>Shampoo & conditioner (short hair) - 10 mins</li>
                <li>Tea tree experience - 30 mins</li>
              </ul>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Color Services</h2>
              <ul>
                <li>All over color up to shoulder length - 75 mins</li>
                <li>Partial highlights up to 10 foils - 65 mins</li>
              </ul>
            </div>

            <div className="service-category">
              <h2>Chemical Services</h2>
              <ul>
                <li>Full perm - 120 mins</li>
                <li>Relaxer retouch - 60 mins</li>
              </ul>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Combination Services</h2>
              <ul>
                <li>Color - Comes with treatment, trim, and style.</li>
                <li>Perm - Comes with trim.</li>
                <li>Hair Relaxer - Comes with trim and style.</li>
                <li>Style - Comes with shampoo and conditioner.</li>
                <li>Style with Shampoo and Treatment.</li>
              </ul>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Treatment Services</h2>
              <ul>
                <li>Deep keratin treatment - 45 mins</li>
                <li>Hot oil treatment - 45 mins</li>
              </ul>
            </div>

            <div className="service-category">
              <h2>Style Services</h2>
              <ul>
                <li>Blow dry - 30 mins</li>
                <li>Flat iron - 30 mins</li>
              </ul>
            </div>
          </div>

          <div className="service-row">
            <div className="service-category">
              <h2>Silk Press / price</h2>
              <ul>
                <li>
                  Silk Press (price depends on hair length & thickness) - starts
                  from $120
                </li>
                <li>
                  Silk Press Level A (includes shampoo, deep conditioner, and
                  trim) - 80 mins
                </li>
                <li>
                  Silk Press Level B (includes shampoo, deep conditioning, and
                  deep treatment) - 120 mins
                </li>
              </ul>
            </div>

            <div className="service-category">
              <h2>Waxing Services / price</h2>
              <ul>
                <li>Full facial wax - 45 mins - from  $45</li>
                <li>Chin wax - 10 mins</li>
                <li>Mustache wax - 10 mins</li>
                <li>Eyebrow wax - 10 mins</li>
              </ul>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="booking-section">
        <a href="https://book.squareup.com/appointments/z288wfnlekxjox/location/LQ0QBKPRB0QHA/services" target="_blank" rel="noopener noreferrer">
          <button className="booking-btn">
            Book Now
          </button>
        </a>
      </div>
        </div>
      )
    </div>
  );
}

export default Services;
