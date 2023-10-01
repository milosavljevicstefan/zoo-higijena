import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
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
    <Navbar expand="lg" className="my-0">
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
          <NavDropdown title="Aktivnosti" id="basic-nav-dropdown" style={{ fontSize: "20px" }}>
            <NavDropdown.Item as={Link} to="/udomljavanje">
              Udomljavanje
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lecenje">
              Lečenje
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/obelezavanje">
              Obeležavanje
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about" style={{ fontSize: "20px" }}>
            O nama
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {user ? (
            <Button variant="outline-danger" onClick={handleSignOut} className="mx-2" style={{ fontSize: "20px" }}>
              Odjava
            </Button>
          ) : (
            <Nav.Link as={Link} to="/login" className="btn btn-success mx-2" style={{ fontSize: "20px" }}>
              Prijava
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
