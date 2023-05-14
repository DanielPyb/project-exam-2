import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import NewVenueForm from '../NewVenueForm';


export default function NewVenue() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
          <Button variant="success" onClick={handleShow}>
            New Venue
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>HoliDaze</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NewVenueForm />
            </Modal.Body>
          </Modal>
        </>
      );
}
