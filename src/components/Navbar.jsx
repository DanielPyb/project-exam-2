import React from "react";
import { Navbar as NavbarBs } from "react-bootstrap";
import { Nav, Container } from "react-bootstrap";
import LogoutBtn from "./RegLog/LogOutBtn";
import LogInBtn from "./RegLog/LogInBtn";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  //wanted to keep the accessstoken from the jsx file, but rerendering was easier with grabbing the key in this case
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profileName");
    navigate("/");
  }

  return (
    <NavbarBs bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <NavbarBs.Brand href="/">HoliDaze</NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbar-nav" />
        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: "100px" }}>
            <Link to="/listings" className="nav-link">
              Listings
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </Nav>
          {accessToken ? (
            <LogoutBtn handleLogout={handleLogout} />
          ) : (
            <LogInBtn />
          )}
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
