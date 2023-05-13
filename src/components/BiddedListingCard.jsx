import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"
import { Link, Route } from 'react-router-dom'
import UpdateBookingModal from './ModalCalls/UpdateBookingModal'
import DeleteBookingModal from './ModalCalls/DeleteBookingModal'

export default function BiddedListingCard(venue) {
  const startDate = new Date(venue.dateFrom).toLocaleString().split(',')[0]
  const endDate = new Date(venue.dateTo).toLocaleString().split(',')[0]
  return (
    <Col className='gy-2'>
    <Card className="h-100" >
          <Link to={`/listings/${venue.venue.id}`}><Card.Img
          variant="top"
          src={venue.venue.media[0]}
          className="burn-cards-image"
          /></Link>
          <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <h2>{venue.venue.name}</h2>
          </Card.Title>
          <div>
            <span>{startDate} - {endDate}</span>
            <p>{venue.guests} guest(s)</p>
          </div>
          <Row>
          <Col>
          <UpdateBookingModal />
          </Col>
          <Col>
          <DeleteBookingModal />
          </Col>
          </Row>
          </Card.Body>
    </Card>
    </Col>
  )
}
