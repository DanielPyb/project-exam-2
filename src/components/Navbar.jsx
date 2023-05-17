import React from "react";
import { Navbar as NavbarBs } from "react-bootstrap";
import { Nav, Container } from "react-bootstrap";
import { accessToken } from "./APIcalls/accessToken";
import LogoutBtn from "./RegLog/LogOutBtn";
import LogInBtn from "./RegLog/LogInBtn";

export default function Navbar() {
  return (
    <NavbarBs bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <NavbarBs.Brand href="/">HoliDaze</NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="navbar-nav" />
        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto" style={{ maxHeight: "100px" }}>
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          {accessToken && <LogoutBtn />}
          {!accessToken && <LogInBtn />}
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
