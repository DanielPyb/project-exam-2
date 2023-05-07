import React from 'react'
import { Button, Card } from 'react-bootstrap';


export default function Avatar() {
  return (
    <Card className="h-100" >
    <Card.Img
      variant="top"
      src
      className="burn-cards-image"
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <h2>Daniel Sollid</h2>
      </Card.Title>
      <Button>Update Avatar</Button>
    </Card.Body>
  </Card>
  )
}
