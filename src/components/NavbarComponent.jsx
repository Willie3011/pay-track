import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
function NavbarComponent() {
  const { currentUser, logout } = useAuth();

  function Logout() {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container >
        <Navbar.Brand
          href={currentUser ? "/dashboard" : "/login"}
          className="fw-bold text-success">
          Pay Track
        </Navbar.Brand>
        {currentUser ? (
          <div className="m mx-2">
            <DropdownButton
              as={ButtonGroup}
              id="dropdown"
              title={<FaUserCircle />}
              variant="light"
              align='end'
              style={{ width: "40px", height: "40px" }}>
              <Dropdown.Header className="fw-bold">
                {currentUser.displayName}
              </Dropdown.Header>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/login" onClick={Logout}>
                Log out
              </Dropdown.Item>
            </DropdownButton>
          </div>
        ) : (
          <div className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex bg-light">
                <Nav.Link>Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
