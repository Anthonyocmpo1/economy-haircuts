import React, { useState, useEffect } from 'react'; // Removed useCallback
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from '../src/components/Services';
import Contact from './pages/Contact';

import './App.css';
import Header from './components/Header';

function App() {
  const [data, setData] = useState({ images: [], artwork: [], logos: [] });


  useEffect(() => {
    fetch('/db.json') // Adjust the path if db.json is in the public folder
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Error loading data:', error));
  }, []);



  return (
    <Router>
      <div>
       <Header/>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home images={data.images} logos={data.logos} artwork={data.artwork} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services artwork={data.artwork} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <div className="footer-content">
            <p>&copy; 2025 Economy Haircuts @ Attiva Pearland</p>
            <div className="social-media-links">
              {/* Direct link to Facebook page */}
              <a
                href="https://www.facebook.com/people/Economy-Hair-cuts/61566845251082/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="fab fa-facebook footer-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/economyhaircuts/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="fab fa-instagram footer-icon"></i>
              </a>
            </div>
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