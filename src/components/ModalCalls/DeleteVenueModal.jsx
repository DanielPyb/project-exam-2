import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import { APIDeleteVenue } from "../../utilities/ApiCalls";
import { accessToken } from "../../utilities/accessToken";
import logo from "../../images/logo.svg";

export default function DeleteVenueModal({ id, onUpdateVenue }) {
  const [confirmation, setConfirmation] = useState(false);
  const [show, setShow] = useState(false);
  
  //modal handling
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSwitch(e) {
    setConfirmation(e.target.checked);
  }

  async function deleteVenue(e) {
    e.preventDefault();
    if (confirmation) {
      await APIDeleteVenue(id, accessToken);
      onUpdateVenue();
      handleClose();
    } else {
      alert("If you really want to delete this, check yes");
    }
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

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
            <Button variant="danger" onClick={deleteVenue}>
              Delete venue
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
