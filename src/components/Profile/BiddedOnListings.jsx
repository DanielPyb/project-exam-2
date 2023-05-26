import React from "react";
import BiddedListingCard from "./BiddedListingCard";
import { Row, Col } from "react-bootstrap";

export default function BiddedOnListings({ list, onUpdateBookings }) {
  console.log(list);
  const sortedList = [...list].sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA - dateB;
  });

  return (
    <div>
      <h2 className="mt-5">Your Vacations</h2>
      <Row xs={1} xl={2} className="g-4">
        {sortedList.map((item) => (
          <Col key={item.venue.name}>
            <BiddedListingCard
              item={item}
              onUpdateBookings={onUpdateBookings}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
