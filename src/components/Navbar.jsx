import React from 'react'
import { Navbar as NavbarBs } from 'react-bootstrap'; 
import { Nav, Container } from 'react-bootstrap';

export default function Navbar() {
  return (
    <NavbarBs bg="primary" expand="lg" variant='dark'>
        <Container>
          <NavbarBs.Brand href="/">HoliDaze</NavbarBs.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
    </NavbarBs>
  )
}
