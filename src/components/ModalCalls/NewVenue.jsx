import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../../images/logo.svg";
import NewVenueForm from "../Profile/NewVenueForm";


export default function NewVenue({ onUpdateVenue }) {
  const [show, setShow] = useState(false);
  
   //modal handling
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="btn-big">
        +
      </button>

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
          <NewVenueForm
            onUpdateVenue={onUpdateVenue}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
