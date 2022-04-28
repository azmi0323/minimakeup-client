import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <NavLink to="/"><img src="" alt="Img hobe" /></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/blogs">Blogs</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/services">Services</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/about">About</NavLink>
            </Nav>
            <Nav>
              <Nav.Link >More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
