import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import RentedListingsCard from "./RentedListingsCard";

export default function ForRentListings({ list }) {
  return (
    <div>
      <h2 className="mt-5">Your Listings</h2>
      <Row xs={1} lg={2} className="mt-2 d-grid gap-4">
        {list.map((item) => (
          <Col key={item.name}>
            <RentedListingsCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
