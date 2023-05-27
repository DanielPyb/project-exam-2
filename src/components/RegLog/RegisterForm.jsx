import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { APIRegisterAccount } from "../../utilities/ApiCalls";

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


// changeHandler
  function changeHandler(key, e){
    switch (key) {
      case "name":
        setName(e.target.value);
        setNameError("");
        break;
      case "email":
        setEmail(e.target.value);
        setEmailError("");
        break;
      case "password":
        setPassword(e.target.value);
        setPasswordError("");
        break;
      case "avatar":
        setAvatar(e.target.value);
        setAvatarError("");
        break;
      case "venueManager":
        setVenueManager(e.target.checked);
        break;
      default:
        break;
  }
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
      if (registeredObj.id) {
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
            <h2 className="hoverable" onClick={toggleForm}>
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
              onChange={(e) => changeHandler("name", e)}
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
              onChange={(e) => changeHandler("email", e)}
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
              onChange={(e) => changeHandler("password", e)}
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
              onChange={(e) => changeHandler("avatar", e)}
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
            onChange={(e) => changeHandler("venueManager", e)}
          />
        </Row>
        <Button onClick={registerAccount}>REGISTER</Button>
        {registerError && <p className="text-danger">{registerError}</p>}
      </Form>
    </div>
  );
}
