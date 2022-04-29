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
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className={'footer-style'} to="/">
          <h6 class="h1 text-white fw-bold ">Mini<span className='text-info me-5'>Makeup</span></h6>
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
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/manageItems"
                  >
                    Manage Items
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/AddItems"
                  >
                    Add Items
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/myItems"
                  >
                    My Items
                  </NavLink>
                  <button
                    className="btn btn-danger ms-3 fw-bold"
                    onClick={() => signOut(auth)}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/signUp"
                  >
                    Sign Up
                  </NavLink>
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
