import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewVenueForm from "../Profile/NewVenueForm";
import logo from "../../images/logo.svg";

export default function NewVenue({ onUpdateVenue }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        New Venue
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
          <NewVenueForm onUpdateVenue={onUpdateVenue} />
        </Modal.Body>
      </Modal>
    </>
  );
}
