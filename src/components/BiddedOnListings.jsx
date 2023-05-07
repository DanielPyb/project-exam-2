import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"

export default function BiddedOnListings() {
  return (
    <div>
    <h2 className='mt-5'>Your Vacations</h2>
    <Row s={1} md={2} className="mt-2">
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
        <Button variant='danger'>Delete Listing</Button>
        </Col>
        </Row>
        </Card.Body>
  </Card>
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
        <Button variant='danger'>Delete Listing</Button>
        </Col>
        </Row>
        </Card.Body>
  </Card>
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
        <Button variant='danger'>Delete Listing</Button>
        </Col>
        </Row>
        </Card.Body>
  </Card>
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
        <Button variant='danger'>Delete Listing</Button>
        </Col>
        </Row>
        </Card.Body>
  </Card>
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
        <Button variant='danger'>Delete Listing</Button>
        </Col>
        </Row>
        </Card.Body>
  </Card>
  </Row>
    </div>
  )
}
