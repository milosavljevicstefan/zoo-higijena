import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const NavbarComponent = () => {
  const { user, logout } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await logout();
      console.log("User signed out");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
      <img
          src="/logo.png"
          alt="Logo"
          width="155"
          height="81"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <Button variant="outline-danger" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
