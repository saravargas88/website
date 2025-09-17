import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/icons/BlueBird.svg";

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
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      }}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <span className="ms-2">Qi Liu</span>
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Links */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={expanded ? "expanded-menu" : ""}
        >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>
              Resume
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
