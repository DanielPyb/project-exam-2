import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ListItems({ listItemObject }) {
  const { id, name, description, media, price, location } = listItemObject;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={media[0]} className="burn-cards-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4 ">
          <h2 className="list-title">{name}</h2>
        </Card.Title>
        <p className="line-clamp-5">{description}</p>
        <Row>
          <Col>
            <h5>{price},-</h5> 
            <p>per night</p>
          </Col>
          <Col>
            <p className="muted-text">
              {location.country} - {location.city}
            </p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="card-footer-pink">
        <Link to={`${id}`}>Check out more</Link>
      </Card.Footer>
    </Card>
  );
}
