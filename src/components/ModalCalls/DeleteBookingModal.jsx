import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'

export default function DeleteBookingModal() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
    <>
    <Button variant="danger" onClick={handleShow}>
      Update Booking
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>HoliDaze</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form>
        <h2>Delete Booking</h2>
        <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>Are you sure?</Form.Label>
            <Form.Check 
                type="switch"
                id="confirm-deletion"
                label="Yes"
        />
        </Form.Group>
        </Row>
    <Button variant="danger" type="submit">Delete venue</Button> 
    </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}