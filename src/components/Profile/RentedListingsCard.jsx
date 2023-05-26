import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import DeleteVenueModal from "../ModalCalls/DeleteVenueModal";
import UpdateVenueModal from "../ModalCalls/UpdateVenueModal";
import ViewVenueBookings from "../ModalCalls/ViewVenueBookings";
import { Link } from "react-router-dom";

export default function RentedListingsCard({ item, onUpdateVenue }) {
  return (
    <Col className="gy-2">
      <Card className="h-100">
        <Link to={`/listings/${item.id}`}>
          <Card.Img
            variant="top"
            src={item.media[0]}
            className="burn-cards-image"
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <h2 className="list-title">{item.name}</h2>
          </Card.Title>
          <div>
            <span>Max guests: {item.maxGuests}</span>
            <p>Per night: {item.price},-</p>
          </div>
          <Row>
            <Col>
              <UpdateVenueModal
                venueDetails={item}
                onUpdateVenue={onUpdateVenue}
              />
            </Col>
            <Col>
              <DeleteVenueModal id={item.id} onUpdateVenue={onUpdateVenue} />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <ViewVenueBookings bookedVenueList={item} />
        </Card.Footer>
      </Card>
    </Col>
  );
}
