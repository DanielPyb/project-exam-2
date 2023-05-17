import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { APILogin } from "../APIcalls/ApiCalls.js";

export default function LoginForm({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [accessToken, setAccessToken] = useState("");

  function localStorageSetter() {
    localStorage.setItem("profileName", profileName);
    localStorage.setItem("accessToken", accessToken);
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
    if (!password) {
      setPasswordError("Please provide password");
    } else {
      setPasswordError("");
    }
  }

  async function logIn(e) {
    if (!email) {
      setEmailError("Please provide valid email");
      return;
    }
    if (!password) {
      setPasswordError("Please provide valid password");
      return;
    }
    const loginObject = { email, password };
    e.preventDefault();
    const loginDetails = await APILogin(loginObject);
    console.log(loginDetails);
    localStorage.setItem("profileName", loginDetails.name);
    localStorage.setItem("accessToken", loginDetails.accessToken);
  }

  return (
    <div className="burn-form">
      <Form>
        <Row>
          <Col>
            <h2 className="text-muted" onClick={toggleForm}>
              Register
            </h2>
          </Col>
          <Col>
            <h2>Login</h2>
          </Col>
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
        <Button onClick={logIn}>LOGIN</Button>
      </Form>
    </div>
  );
}
