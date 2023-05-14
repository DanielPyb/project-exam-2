import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { APIDeleteVenue } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function DeleteVenueModal({id}) {
  const [confirmation, setConfirmation] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleSwitch(e){
    setConfirmation(e.target.checked);
  }

  async function deleteVenue(){
    if(confirmation){
    APIDeleteVenue(id ,accessToken);
    alert("your venue is deleted")
    handleClose();
  } else {
    alert("If you really want to delete this, check yes")
  }
  }
  
    return (
    <>
    <Button variant="danger" onClick={handleShow}>
      Delete Booking
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>HoliDaze</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form>
        <h2>Delete Venue</h2>
        <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>Are you sure?</Form.Label>
            <Form.Check 
                type="switch"
                id="confirm-deletion"
                label="Yes"
                checked={confirmation}
                onChange={handleSwitch}
        />
        </Form.Group>
        </Row>
    <Button variant="danger" onClick={deleteVenue}>Delete venue</Button> 
    </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}