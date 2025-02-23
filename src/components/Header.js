import { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import logo from "../images/logo1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded(false); // Close mobile menu after clicking
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width={40} height={40} alt="logo" />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection("home")}>HOME</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")}>SERVICES</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("gallery")}>GALLERY</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>CONTACT</Nav.Link>
          </Nav>

          {/* Contact Info Section */}
          <div className="contact-container">
            <Row className="align-items-center gx-3">
              <Col xs={12} sm={6} className="text-center text-sm-start">
                <div className="contact-info">
                  <FaPhone size={30} />
                  <div className="text-block">
                    <b>Pearland, Texas</b>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} className="text-center text-sm-start">
                <div className="contact-info">
                  <MdLocationPin size={30} />
                  <div className="text-block">
                    <span>Call Us</span>
                    <b>346-508-8211</b>
                    <b>346-241-1040</b>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-navbar {
          transition: all 0.3s ease-in-out;
          padding: 10px 0;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 0;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          text-align: center;
          box-shadow:none !important;
          background:transparent !important;
          margin-top: 0 !important;
        }

        .text-block {
          display: flex;
          flex-direction: column;
        }

        .contact-info:hover {
          color: purple;
          transform: scale(1.05);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }

          .contact-info {
            justify-content: center;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;
