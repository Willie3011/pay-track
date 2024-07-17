import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
function NavbarComponent() {
  const { currentUser } = useAuth();
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand
          href={currentUser ? "/dashboard" : "/"}
          className="fw-bold text-success">
          Pay Track
        </Navbar.Brand>
        {currentUser ? (
          <div className="">
              <Navbar.Text className="text-muted fw-bold">
                Signed in as: <a href="/profile" className="text-dark" style={{textDecoration: "none"}}>{currentUser.email}</a>
              </Navbar.Text>

          </div>
        ) : (
            <div className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex bg-light">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Home</Nav.Link>
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
