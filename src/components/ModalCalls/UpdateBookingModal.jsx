import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { APIPutBooking } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function UpdateBookingModal({dateFrom, dateTo, guests, id}) {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newDateFrom, setDateFrom] = useState(dateFrom);
  const [newDateTo, setDateTo] = useState(dateTo);
  const [newGuests, setGuests] = useState(guests);

    async function updateBooking(e){
      e.preventDefault();
      const bookingObject = {
        dateFrom: newDateFrom, 
        dateTo: newDateTo, 
        guests: Number(newGuests)};
      APIPutBooking(bookingObject, id, accessToken);
      handleClose();
    }

    return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Update Booking
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>HoliDaze</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form>
    <h2>Update Booking</h2>
        <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>From</Form.Label>
            <Form.Control type="date" value={newDateFrom} onChange={(e) => setDateFrom(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>To</Form.Label>
            <Form.Control type="date" value={newDateTo} onChange={(e) => setDateTo(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Guests</Form.Label>
            <Form.Control type="number" value={newGuests} onChange={(e) => setGuests(e.target.value)} placeholder={newGuests}/>
        </Form.Group>
        </Row>
    <Button type="submit" onClick={updateBooking}>Update venue</Button> 
    </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}
