import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import NewVenueForm from "../Profile/NewVenueForm";


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
