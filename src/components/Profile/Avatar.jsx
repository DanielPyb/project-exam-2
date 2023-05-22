import React from 'react'
import { Card } from 'react-bootstrap';
import UpdateAvatarModal from '../ModalCalls/UpdateAvatarModal';


export default function Avatar({name, avatar}) {
  return (
    <div className='avatar'>
    <Card className="h-100" >
    <Card.Img
      variant="top"
      src={avatar}
      className="burn-cards-image"
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <h2>{name}</h2>
      </Card.Title>
      <UpdateAvatarModal name={name}/>
    </Card.Body>
  </Card>
  </div>
  )
}
