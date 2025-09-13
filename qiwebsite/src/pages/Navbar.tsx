/*
COMPONENT DEFINITION SCRIPT FOR NAVBAR
In this script we make a reusable navigation bar component.
This will be at the top of the page.
*/

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/calculator.svg";

export default function NavBar() {
  // to track if the navbar is open or closed
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      bg="dark"       // always solid background
      variant="dark"  // text colors fit the dark background
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        {/* Mobile toggle button */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
