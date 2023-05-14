import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"
import DeleteVenueModal from './ModalCalls/DeleteVenueModal'


export default function RentedListingsCard(venue) {
  console.log(venue)
  return (
    <Col className='gy-2'>
    <Card className="h-100" >
          <Card.Img
          variant="top"
          src={venue.media[0]}
          className="burn-cards-image"
          />
          <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <h2>{venue.name}</h2>
          </Card.Title>
          <div>
            <span>Max guests: {venue.maxGuests}</span>
            <p>Per night: {venue.price},-</p>
          </div>
          <Row>
          <Col>
          <Button>Update Listing</Button>
          </Col>
          <Col>
          <DeleteVenueModal id={venue.id} />
          </Col>
          </Row>
          </Card.Body>
    </Card>
    </Col>
  )
}
