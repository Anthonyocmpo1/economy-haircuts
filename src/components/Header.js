import { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import logo from "../images/logo1.jpg";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width={40} height={40} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link onClick={() => scrollToSection("home")}>HOME</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")}>SERVICES</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("gallery")}>GALLERY</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>CONTACT</Nav.Link>
          </Nav>

          <Nav className="ms-auto contact-info-container">
            <Row className="align-items-center w-100 text-center text-lg-end">
              <Col xs={12} md={6} className="mb-2 mb-md-0">
                <div className="contact-info">
                  <FaPhone size={30} />
                  <div className="text-block">
                    <span>Call Us</span>
                    <b>346-508-8211</b>
                   
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="contact-info">
                  <MdLocationPin size={30} />
                  <div className="text-block">
                    <b>Pearland, Texas</b>
                  </div>
                </div>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .contact-info {
          display: flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        }

        .text-block {
          display: flex;
          flex-direction: column;
          font-size: 14px;
        }

        .contact-info:hover {
          color: purple;
          transform: scale(1.05);
          cursor: pointer;
        }

        /* Responsive styles */
        @media (max-width: 992px) {
          .contact-info-container {
            flex-direction: column;
            align-items: center;
          }

          .contact-info {
            justify-content: center;
          }

          .text-block {
            text-align: center;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;
