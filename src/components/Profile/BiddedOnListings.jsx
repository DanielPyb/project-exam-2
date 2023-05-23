import React from "react";
import BiddedListingCard from "./BiddedListingCard";
import { Row, Col } from "react-bootstrap";

export default function BiddedOnListings({ list, onUpdateVenue }) {
  return (
    <div>
      <h2 className="mt-5">Your Vacations</h2>
      <Row xs={1} xl={2} className="g-4">
        {list.map((item) => (
          <Col key={item.venue.name}>
            <BiddedListingCard item={item} onUpdateVenue={onUpdateVenue} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
