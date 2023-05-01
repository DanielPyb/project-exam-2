import React from 'react'
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'

export default function NewVenueForm() {
  return (
    <div className='burn-form'>
    <Form>
    <h2>New Venue</h2>
    <Row className="mb-3">
        <Form.Group>
            <Form.Label>Name of venue</Form.Label>
            <Form.Control type="text" placeholder='Lovely boat'/>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3}/>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group>
            <Form.Label>Media, seperated by comma</Form.Label>
            <Form.Control type="text" placeholder='https//nicepictures.com/thisone.jpg'/>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Label>Price per night (kr)</Form.Label>
            <Form.Control type="number" placeholder='200'/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Max guests</Form.Label>
            <Form.Control type="number" placeholder='2'/>
        </Form.Group>
        </Row>
        <h3 className='mb-3'>Facilities</h3>
        <Row className='mb-3'>
            <FormGroup>
          <Form.Check
            inline
            label="Wifi"
            name="group1"
            type="checkbox"
            id={`wifi`}
          />
          <Form.Check
            inline
            label="Parking"
            name="group1"
            type="checkbox"
            id={`parking`}
          />
          <Form.Check
            inline
            label="Pet friendly"
            type="checkbox"
            id={`pet-friendly`}
          />
         <Form.Check
            inline
            label="Breakfast"
            type="checkbox"
            id={`breakfast`}
          />
        </FormGroup>
        </Row>
        <h3 className='mb-3'>Location</h3>
        <Row className='mb-3'>
        <Form.Group>
            <Form.Label>Continent</Form.Label>
            <Form.Control type="text" placeholder="Europe"/>
        </Form.Group>
        </Row>
    <Row className='mb-3'>
        <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder='Mølleparken 4'/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder='Oslo'/>
        </Form.Group>
    </Row>
    <Row className='mb-3'>
        <Form.Group as={Col}>
            <Form.Label>Zip code</Form.Label>
            <Form.Control type="text" placeholder='0459'/>
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder='Norway'/>
        </Form.Group>
    </Row>
    <Button type="submit">Create venue</Button> 
    </Form>
    </div>
  )
}
