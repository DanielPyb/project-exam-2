import React from 'react'
import { Button, Card } from 'react-bootstrap';
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"


export default function Avatar() {
  return (
    <div className='avatar'>
    <Card className="h-100" >
    <Card.Img
      variant="top"
      src={tempPhoto}
      className="burn-cards-image"
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <h2>Daniel Sollid</h2>
      </Card.Title>
      <Button>Update Avatar</Button>
    </Card.Body>
  </Card>
  </div>
  )
}
