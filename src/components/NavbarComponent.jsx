import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
function NavbarComponent() {
  const { currentUser, logout } = useAuth();
  function Logout() {
    try {
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand
          href={currentUser ? "/dashboard" : "/login"}
          className="fw-bold text-success">
          Pay Track
        </Navbar.Brand>
        {currentUser ? (
          <div className="d-flex align-items-center justify-content-center gap-2">
              <Navbar.Text className="text-muted fw-bold p-2">
                Signed in as: <a href="/profile" className="text-dark" style={{textDecoration: "none"}}>{currentUser.email}</a>
              </Navbar.Text>
              <div className="vr" style={{height: ""}}></div>
              <Navbar.Text>
                <a href="/login" onClick={Logout} className="fw-bold p-2" style={{textDecoration:"none"}}>Log out</a>
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
