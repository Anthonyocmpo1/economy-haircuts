import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from '../images/logo1.jpg';
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: "0 !important" }} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width={40} height={40} alt="logo" />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link onClick={() => scrollToSection("home")}>HOME</Nav.Link>
          <Nav.Link onClick={() => scrollToSection("services")}>SERVICES</Nav.Link>
          <Nav.Link onClick={() => scrollToSection("gallery")}>GALLERY</Nav.Link>
          <Nav.Link onClick={() => scrollToSection("contact")}>CONTACT</Nav.Link>
        </Nav>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="contact-info">
                  <FaPhone size={40} />
                  <div className="text-block">
                    <b>Earland, Texas</b>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="contact-info">
                  <MdLocationPin size={40} />
                  <div className="text-block">
                    <span>Call Us</span>
                    <b>346-241-1040</b>
                  </div>
                </div>
              </Col>
            </Row>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .contact-info {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
          box-shadow:none !important;
          background:transparent !important;
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

        /* Sticky Navbar Effect */
        .navbar {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </Navbar>
  );
}

export default Header;
