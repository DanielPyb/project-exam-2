import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"

export default function BiddedListingCard() {
  return (
    <Col className='gy-2'>
    <Card className="h-100" >
          <Card.Img
          variant="top"
          src={tempPhoto}
          className="burn-cards-image"
          />
          <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <h2>NAME OF LISTING</h2>
          </Card.Title>
          <Row>
          <Col>
          <Button>Update Listing</Button>
          </Col>
          <Col>
          <Button variant='danger'>Cancel Vacation</Button>
          </Col>
          </Row>
          </Card.Body>
    </Card>
    </Col>
  )
}
