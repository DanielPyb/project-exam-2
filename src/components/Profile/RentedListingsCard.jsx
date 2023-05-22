import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DeleteVenueModal from "../ModalCalls/DeleteVenueModal";
import UpdateVenueModal from "../ModalCalls/UpdateVenueModal";
import ViewVenueBookings from "../ModalCalls/ViewVenueBookings";
import { Link } from "react-router-dom";

export default function RentedListingsCard(venue) {
  return (
    <Col className="gy-2">
      <Card className="h-100">
        <Link to={`/listings/${venue.id}`}>
          <Card.Img
            variant="top"
            src={venue.media[0]}
            className="burn-cards-image"
          />
        </Link>
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
              <UpdateVenueModal venueDetails={venue} />
            </Col>
            <Col>
              <DeleteVenueModal id={venue.id} />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <ViewVenueBookings bookedVenueList={venue} />
        </Card.Footer>
      </Card>
    </Col>
  );
}
