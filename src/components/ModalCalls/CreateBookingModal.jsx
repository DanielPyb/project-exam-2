import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { APIBookingPost, APIPutBooking } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function CreateBookingModal({ venueId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [guests, setGuests] = useState(0);

  async function createBooking(e) {
    e.preventDefault();
    const bookingObject = {
      dateFrom: new Date(dateFrom).toISOString(),
      dateTo: new Date(dateTo).toISOString(),
      guests: Number(guests),
      venueId,
    };
    console.log(bookingObject);
    APIBookingPost(bookingObject, accessToken);
  }

  return (
    <>
      <Button onClick={handleShow}>Book!</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>HoliDaze</Modal.Header>
        <Modal.Body>
          <Form>
            <h2>Create Booking</h2>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Guests</Form.Label>
                <Form.Control
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="5"
                />
              </Form.Group>
            </Row>
            <Button type="submit" variant="dark" onClick={createBooking}>
              Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
