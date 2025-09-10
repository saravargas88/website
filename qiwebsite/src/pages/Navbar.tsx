


/*

In this script we make a reusable navigation bar component
This will be at the top of the page 

*/
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          MySite
        </Navbar.Brand>

        {/* Hamburger button */}
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
