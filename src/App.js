import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Import components from the components folder
import Home from './pages/Home';
import About from '../src/components/ About';
import Services from '../src/components/Services';
import Booking from '../src/components/ Booking';
import Contact from '../src/components/Contant';

import './App.css';

function App() {
  const [data, setData] = useState({ images: [], artwork: [], logos: [] });

  useEffect(() => {
    fetch('/db.json')  // Adjust the path if your db.json file is in a different location
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <Router>
      <div>
      <header>
  <h1>Economy Haircuts @ Attiva Pearland</h1>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/booking">Book Appointment</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
</header>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home images={data.images} logos={data.logos} artwork={data.artwork} />}
            />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services artwork={data.artwork} />} /> {/* Pass artwork to Services */}
            <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
          </Routes>
        </main>

        {/* Footer remains global */}
        <footer>
        <div className="footer-content">
          <p>&copy; 2024 Economy Haircuts @ Attiva Pearland</p>

          {/* Social Media Links */}
          <div className="social-media-links">
            <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook footer-icon"></i> {/* Facebook icon */}
            </a>
            <a href="https://www.instagram.com/YourInstagramPage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram footer-icon"></i> {/* Instagram icon */}
            </a>
          </div>

          {/* Back to Top Button */}
          <button className="footer-button" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
          </button>
        </div>
      </footer>
    </div>
      
    </Router>
  );
}

export default App;