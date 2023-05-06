import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import placeHolderImage from "../images/background.png"  


export default function ListingPage() {
  return (
    <>
    <div className='burn-card-top'>
        <img src={placeHolderImage}></img>
        <div className='burn-card-title'>
            <h2>Title of Residence</h2>
            <p>Want to wake up to birds singing? Or maybe want to get a look at the wild animals before you sleep? Then this place is the right one for you and your </p>
        </div>
        <div className='burn-card-title'>
            <h2>Includes</h2>
            <ul>
                <li>
                    Image - wifi
                </li>
                <li>
                    Image - Breakfast
                </li>
                <li>
                    Image - Guests
                </li>
                <li>
                    Image - Pet friendly
                </li>
                <li>
                    Image - Parking
                </li>
            </ul>
        </div>
        <div className='burn-card-title'>
            <h2>Availability</h2>
            <p>DATE RANGE INSERT</p>
        </div>
        <div className='burn-card-title'>
            <h2>Location</h2>
            <p>Norway</p>
            <p>Tamburgata 14, 3733 - <strong>Skien</strong></p>
        </div>
        </div>
        <div className='burn-card-booking'>
            <Row>
            <Col>
                <p>400,- per night</p>
            </Col>
            <Col>
                <Button>Book</Button>
                </Col>
            </Row>
        </div>

    </>
  )
}
