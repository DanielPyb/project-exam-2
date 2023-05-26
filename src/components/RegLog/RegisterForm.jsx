import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { APIRegisterAccount } from "../APIcalls/ApiCalls";

export default function RegisterForm({ toggleForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [venueManager, setVenueManager] = useState(false);
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [avatarError, setAvatarError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  function nameHandler(e) {
    setName(e.target.value);
    if (!name) {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
  }
  function emailHandler(e) {
    setEmail(e.target.value);
    if (!email) {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
    if (password.length < 8) {
      setPasswordError("Password must be longer than 8 symbols");
    } else {
      setPasswordError("");
    }
  }
  function avatarHandler(e) {
    setAvatar(e.target.value);
  }
  function venueMangerSwitch(e) {
    setVenueManager(e.target.checked);
  }

  async function registerAccount(e) {
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!email) {
      setEmailError("Valid stud.noroff email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password must be longer than 8 symbols");
      return;
    }
    if (!avatar) {
      setAvatarError("Please give a link to a photo");
      return;
    }
    const registerObject = { name, email, avatar, venueManager, password };
    e.preventDefault();
    try {
      const registeredObj = await APIRegisterAccount(registerObject);
      if ([200, 201, 202, 203, 204].includes(registeredObj.statusCode)) {
        setRegisterError(null);
        toggleForm();
      } else {
        setRegisterError(registeredObj.errors[0].message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="burn-form">
      <Form>
        <Row>
          <Col>
            <h2>Register</h2>
          </Col>
          <Col>
            <h2 className="text-muted" onClick={toggleForm}>
              Login
            </h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ola nordmann"
              onChange={nameHandler}
              isInvalid={Boolean(nameError)}
            />
            {nameError && <span className="text-danger">{nameError}</span>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="boat@stud.noroff.no"
              onChange={emailHandler}
              isInvalid={Boolean(emailError)}
            />
            {emailError && <span className="text-danger">{emailError}</span>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Super secret"
              onChange={passwordHandler}
              isInvalid={Boolean(passwordError)}
            />
            {passwordError && (
              <span className="text-danger">{passwordError}</span>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder="https//nicepictures.com/thisone.jpg"
              onChange={avatarHandler}
              isInvalid={Boolean(avatarError)}
            />
            {avatarError && <span className="text-danger">{avatarError}</span>}
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
        <Button onClick={registerAccount}>REGISTER</Button>
        {registerError && <p className="text-danger">{registerError}</p>}
      </Form>
    </div>
  );
}
