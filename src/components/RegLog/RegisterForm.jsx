import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [venueManager, setVenueManager] = useState(false);
  const [password, setPassword] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function avatarHandler(e) {
    setAvatar(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function venueMangerSwitch(e){
    setVenueManager(e.target.checked);
  }

  function TESTING(e) {
    const registerObject = { name, email, avatar, venueManager, password };
    e.preventDefault();
    console.log(registerObject);
  }

  return (
    <div className="burn-form">
      <Form>
        <Row>
          <Col>
            <h2>Register</h2>
          </Col>
          <Col>
            <h2 className="text-muted">Login</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ola nordmann"
              onChange={nameHandler}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="boat@stud.noroff.no"
              onChange={emailHandler}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Super secret"
              onChange={passwordHandler}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder="https//nicepictures.com/thisone.jpg"
              onChange={avatarHandler}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 px-4">
          <Form.Check
            type="switch"
            id="venue-manager"
            label="Venue Manager"
            checked={venueManager}
            onChange={venueMangerSwitch}
          />
        </Row>
        <Button onClick={TESTING}>REGISTER</Button>
      </Form>
    </div>
  );
}
