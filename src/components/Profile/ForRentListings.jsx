import React from "react";
import { Col, Row } from "react-bootstrap";
import RentedListingsCard from "./RentedListingsCard";

export default function ForRentListings({ list }) {
  return (
    <div>
      <h2 className="mt-5">Your Listings</h2>
      <Row xs={1} md={2} className="g-4">
        {list.map((item) => (
          <Col key={item.name}>
            <RentedListingsCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
