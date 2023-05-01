import React from 'react'
import {Button, Col, Form, FormGroup, Row } from 'react-bootstrap'

function RegisterForm() {
    return(
        <div className='burn-form'>
        <Form>
        <h2>Register</h2>
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
            <Row className="mb-3">
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder='Confirm password'/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group>
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="text" placeholder='https//nicepictures.com/thisone.jpg'/>
            </Form.Group>
            </Row>
            <Row className='mb-3 px-4'>
                <Form.Check
                    type="switch"
                    id="venue-manager"
                    label="Venue Manager"
                />
            </Row>
            <Button>REGISTER</Button>
            <h4>Login</h4>
        </Form>
        </div>
    )
}

function LoginForm() {
    return (
        <div className='burn-form'>
        <Form>
        <h2>Login</h2>
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

export default function RegisterLoginForm() {
    return(
        <>
        <RegisterForm />
        <LoginForm />
        </>
    )
}
