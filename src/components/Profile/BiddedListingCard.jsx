import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpdateBookingModal from "../ModalCalls/UpdateBookingModal";
import DeleteBookingModal from "../ModalCalls/DeleteBookingModal";

export default function BiddedListingCard({ item, onUpdateBookings }) {
  const startDate = new Date(item.dateFrom).toLocaleString().split(",")[0];
  const endDate = new Date(item.dateTo).toLocaleString().split(",")[0];
  return (
    <Col className="gy-2">
      <Card className="h-100">
        <Link to={`/listings/${item.venue.id}`}>
          <Card.Img
            variant="top"
            src={item.venue.media[0]}
            className="burn-cards-image"
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <h2>{item.venue.name}</h2>
          </Card.Title>
          <div>
            <span>
              {startDate} - {endDate}
            </span>
            <p>{item.guests} guest(s)</p>
          </div>
          <Row>
            <Col>
              <UpdateBookingModal
                {...item}
                onUpdateBookings={onUpdateBookings}
              />
            </Col>
            <Col>
              <DeleteBookingModal
                id={item.id}
                onUpdateBookings={onUpdateBookings}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}
