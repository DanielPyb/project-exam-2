import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import tempPhoto from "../images/Rocket_in_Avengers_Endgame.jpeg"
import RentedListingsCard from './RentedListingsCard'

export default function ForRentListings() {
  return (
    <div>
    <h2 className='mt-5'>Your Listings</h2>
    <Row s={1} md={2} className="mt-2" >
    <RentedListingsCard />
    <RentedListingsCard />
    <RentedListingsCard />
    <RentedListingsCard />
    <RentedListingsCard />
    <RentedListingsCard />

  </Row>
    </div>
  )
}
