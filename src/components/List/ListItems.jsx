import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListItems({ listItemObject }) {
  const { id, name, description, media, price, location } = listItemObject;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={media[0]} className="burn-cards-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <h2>{name}</h2>
        </Card.Title>
        <p className="line-clamp-5">{description}</p>
        <Row>
          <Col>
            <p>{price},- per night</p>
          </Col>
          <Col>
            <p>
              {location.country} - {location.city}
            </p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Link to={`${id}`}>Check out more</Link>
      </Card.Footer>
    </Card>
  );
}
