import React from 'react'
import BiddedListingCard from './BiddedListingCard'
import { Row } from 'react-bootstrap'


export default function BiddedOnListings() {
  return (
    <div>
    <h2 className='mt-5'>Your Vacations</h2>
    <Row s={1} md={2} className="mt-2" >
    <BiddedListingCard />
    <BiddedListingCard />
    <BiddedListingCard />
  </Row>
    </div>
  )
}
