import React from 'react'
import Avatar from '../components/Avatar'
import ForRentListings from '../components/ForRentListings'
import { Container, Row } from 'react-bootstrap'
import BiddedOnListings from '../components/BiddedOnListings'


export default function Profile() {
  return (
    <Container>
      <Avatar />
      <Row s={1} lg={2} className="gx-4">
      <ForRentListings />
      <BiddedOnListings />
      </Row>
    </Container>
  )
}
