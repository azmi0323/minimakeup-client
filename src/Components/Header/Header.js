import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";


const Header = () => {
    const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <NavLink to="/">
            <img src="" alt="Img hobe" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/inventory"
              >
                Inventory
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/about"
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              <span className="fw-bold d-flex justify-content-center align-items-center text-info">
                {user?.displayName && user.displayName}
              </span>
              {user ? (
                <button
                  className="btn fw-bold btn-danger ms-2"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <div>
                  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/login">Login</NavLink>
                  
                  <NavLink className={({ isActive }) => (isActive ? "link-active" : "link")} to="/signUp">Sign Up</NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
