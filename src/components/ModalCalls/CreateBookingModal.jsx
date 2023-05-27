import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { APIBookingPost } from "../../utilities/ApiCalls";
import { accessToken } from "../../utilities/accessToken";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

export default function CreateBookingModal({ venueId }) {
  const [show, setShow] = useState(false);
  const [bookingError, setBookingError] = useState("");

  const navigate = useNavigate();

  //Modal handling
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //destructured object that will be used for the bookingObject
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [guests, setGuests] = useState(0);

  async function createBooking(e) {
    e.preventDefault();
    setBookingError("");
    const bookingObject = {
      dateFrom: new Date(dateFrom).toISOString(),
      dateTo: new Date(dateTo).toISOString(),
      guests: Number(guests),
      venueId,
    };
    console.log(bookingObject);
    try {
    const postResponse = await APIBookingPost(bookingObject, accessToken);
    if(postResponse.created){
      navigate("/profile")
    }
    else{
      console.log(postResponse);
      setBookingError(postResponse.status)
    }
  }
    catch(error){
    console.error(error);
  }
  }

  return (
    <>
      <Button onClick={handleShow}>Book!</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <img
            src={logo}
            width={30}
            className="d-inline-block align-top"
            alt="holidaze logo"
          />
          HoliDaze
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h2>Create Booking</h2>
            <Row className="mb-3" xs={1} lg={3}>
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
            {bookingError && <p className="text-danger">{bookingError}</p>}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
