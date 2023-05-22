import React from "react";
import BiddedListingCard from "./BiddedListingCard";
import { Row, Col } from "react-bootstrap";

export default function BiddedOnListings({ list }) {
  return (
    <div>
      <h2 className="mt-5">Your Vacations</h2>
      <Row xs={1} lg={2} className="g-4">
        {list.map((item) => (
          <Col key={item.name}>
            <BiddedListingCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
