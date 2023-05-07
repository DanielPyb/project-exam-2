import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap/esm'

export default function Footer() {
  return (
    <>
    <div className='footer-container'>
    <div className='footer-content'>
        <h4 className='footer-title'>HoliDaze</h4>
        <p>Made by Daniel Sollid</p>
        <Row>
        <Col>
        <p>LinkedIn</p>
        </Col>
        <Col>
        <p>Github</p>
        </Col>
        </Row>
        </div>
    </div>
    </>
  )
}
