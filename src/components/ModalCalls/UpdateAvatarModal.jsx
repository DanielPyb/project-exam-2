import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row } from "react-bootstrap";
import { APIChangeAvatar } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";



export default function UpdateAvatarModal({name}) {
  const [show, setShow] = useState(false);
  const [avatarLink, setAvatarLink] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAvatarLinkChange(e) {
    setAvatarLink(e.target.value);
    console.log(avatarLink);
  }

  async function updateAvatar(){
    APIChangeAvatar(name, avatarLink ,accessToken);
    handleClose();
    console.log(name, avatarLink, accessToken);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Avatar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HoliDaze</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group>
                <Form.Label>New Avatar Link</Form.Label>
                <Form.Control type="text" placeholder="A very cool logo" onChange={handleAvatarLinkChange}/>
              </Form.Group>
            </Row>
            <Button type="submit" variant="primary" onClick={updateAvatar} >
              Update Avatar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
