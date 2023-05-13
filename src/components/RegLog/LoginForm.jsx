import React from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";


export default function LoginForm() {
    return (
        <div className='burn-form'>
        <Form>
        <Row>
          <Col>
            <h2 className="text-muted">Register</h2>
          </Col>
          <Col>
            <h2>Login</h2>
          </Col>
        </Row>
        <Row className="mb-3">
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder='boat@stud.noroff.no'/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Super secret'/>
            </Form.Group>
            </Row>
            <Button>LOGIN</Button>
            <h4>Register</h4>
        </Form>
        </div>
        )
}