import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBars } from "@fortawesome/free-solid-svg-icons";

function header() {
  return (
    <div>
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2>
              <FontAwesomeIcon icon={faUtensils} className="me-2" />
              Akademy
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} className="me-2" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#aboutUs">
                About
              </Nav.Link>
              <Nav.Link eventKey={3} href="#classes">
                Classes
              </Nav.Link>
              <Nav.Link eventKey={4} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;
