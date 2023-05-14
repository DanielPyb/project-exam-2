import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";
import { APIPutVenue } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function UpdateVenueModal({ venueDetails }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(venueDetails.name);
  const [description, setDescription] = useState(venueDetails.description);
  const [media, setMedia] = useState(venueDetails.media);
  const [price, setPrice] = useState(venueDetails.price);
  const [guests, setGuests] = useState(venueDetails.maxGuests);
  //facilities states
  const [facilities_wifi, setFacilities_wifi] = useState(
    venueDetails.meta.wifi
  );
  const [facilities_parking, setFacilities_parking] = useState(
    venueDetails.meta.parking
  );
  const [facilities_pet, setFacilities_pet] = useState(venueDetails.meta.pets);
  const [facilities_breakfast, setFacilities_breakfast] = useState(
    venueDetails.meta.breakfast
  );
  //location states
  const [location_continent, setLocation_continent] = useState(
    venueDetails.location.continent
  );
  const [location_address, setLocation_address] = useState(
    venueDetails.location.address
  );
  const [location_city, setLocation_city] = useState(
    venueDetails.location.city
  );
  const [location_zip, setLocation_zip] = useState(venueDetails.location.zip);
  const [location_country, setLocation_country] = useState(
    venueDetails.location.country
  );

  async function updateVenueListing(e) {
    e.preventDefault();
    const venueObject = {
      name,
      description,
      media,
      price: Number(price),
      maxGuests: Number(guests),
      meta: {
        wifi: facilities_wifi,
        parking: facilities_parking,
        breakfast: facilities_breakfast,
        pets: facilities_pet,
      },
      location: {
        address: location_address,
        city: location_city,
        zip: location_zip,
        country: location_country,
        continent: location_continent,
      },
    };
    APIPutVenue(venueObject, venueDetails.id, accessToken);
  }

  //Handler
  function changeHandler(key, e) {
    switch (key) {
      case "name":
        setName(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "media":
        setMedia(e.target.value.split(","));
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "guests":
        setGuests(e.target.value);
        break;
      case "wifi":
        setFacilities_wifi(e.target.checked);
        break;
      case "breakfast":
        setFacilities_breakfast(e.target.checked);
        break;
      case "pet":
        setFacilities_pet(e.target.checked);
        break;
      case "parking":
        setFacilities_parking(e.target.checked);
        break;
      case "location_continent":
        setLocation_continent(e.target.value);
        break;
      case "location_address":
        setLocation_address(e.target.value);
        break;
      case "location_city":
        setLocation_city(e.target.value);
        break;
      case "location_zip":
        setLocation_zip(e.target.value);
        break;
      case "location_country":
        setLocation_country(e.target.value);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update listing
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HoliDaze</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="burn-form">
            <Form>
              <h2>Update Venue</h2>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Name of venue</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={name}
                    onChange={(e) => changeHandler("name", e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) => changeHandler("description", e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Media, seperated by comma</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https//nicepictures.com/thisone.jpg"
                    onChange={(e) => changeHandler("media", e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Price per night (kr)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={price}
                    onChange={(e) => changeHandler("price", e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Max guests</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={guests}
                    onChange={(e) => changeHandler("guests", e)}
                  />
                </Form.Group>
              </Row>
              <h3 className="mb-3">Facilities</h3>
              <Row className="mb-3">
                <FormGroup>
                  <Form.Check
                    inline
                    label="Wifi"
                    type="checkbox"
                    id={`wifi`}
                    checked={facilities_wifi}
                    onChange={(e) => changeHandler("wifi", e)}
                  />
                  <Form.Check
                    inline
                    label="Parking"
                    type="checkbox"
                    id={`parking`}
                    checked={facilities_parking}
                    onChange={(e) => changeHandler("parking", e)}
                  />
                  <Form.Check
                    inline
                    label="Pet friendly"
                    type="checkbox"
                    id={`pet-friendly`}
                    checked={facilities_pet}
                    onChange={(e) => changeHandler("pet", e)}
                  />
                  <Form.Check
                    inline
                    label="Breakfast"
                    type="checkbox"
                    id={`breakfast`}
                    checked={facilities_breakfast}
                    onChange={(e) => changeHandler("breakfast", e)}
                  />
                </FormGroup>
              </Row>
              <h3 className="mb-3">Location</h3>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Continent</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={location_continent}
                    onChange={(e) => changeHandler("location_continent", e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={location_address}
                    onChange={(e) => changeHandler("location_address", e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={location_city}
                    onChange={(e) => changeHandler("location_city", e)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Zip code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={location_zip}
                    onChange={(e) => changeHandler("location_zip", e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={location_country}
                    onChange={(e) => changeHandler("location_country", e)}
                  />
                </Form.Group>
              </Row>
              <Button type="submit" onClick={updateVenueListing}>
                Update venue
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
