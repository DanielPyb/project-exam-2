import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { APIPostVenue } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function NewVenueForm({ onUpdateVenue, handleClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [price, setPrice] = useState("");
  const [guests, setGuests] = useState("");
  //facilities states
  const [facilities_wifi, setFacilities_wifi] = useState(false);
  const [facilities_parking, setFacilities_parking] = useState(false);
  const [facilities_pet, setFacilities_pet] = useState(false);
  const [facilities_breakfast, setFacilities_breakfast] = useState(false);
  //location states
  const [location_continent, setLocation_continent] = useState("");
  const [location_address, setLocation_address] = useState("");
  const [location_city, setLocation_city] = useState("");
  const [location_zip, setLocation_zip] = useState("");
  const [location_country, setLocation_country] = useState("");

  const [nameError, setNameError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [mediaError, setMediaError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);

  //registrationError

  const [registrationError, setRegistrationError] = useState("");

  //Handler
  function changeHandler(key, e) {
    switch (key) {
      case "name":
        setName(e.target.value);
        setNameError("");
        break;
      case "description":
        setDescription(e.target.value);
        setDescriptionError("");
        break;
      case "media":
        setMedia(e.target.value.split(","));
        setMediaError("");
        break;
      case "price":
        setPrice(e.target.value);
        setPriceError("");
        break;
      case "guests":
        setGuests(e.target.value);
        setGuestsError("");
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
        break;
      default:
        break;
    }
  }

  async function createVenueListing(e) {
    e.preventDefault();
    if (!name) {
      setNameError("Name of venue is needed");
      return;
    }
    if (!description) {
      setDescriptionError("Please provide a description");
      return;
    }
    if (!media) {
      setMediaError("We cannot put out a venue without pictures");
      return;
    }
    if (!price) {
      setPriceError("We need an amount for the stay");
      return;
    }
    if (!guests) {
      setGuestsError("We need to know the max amount of guests");
      return;
    }
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
    try {
      const APIResponse = await APIPostVenue(venueObject, accessToken);
      if (APIResponse.created) {
        onUpdateVenue();
        handleClose();
      } else {
        setRegistrationError(APIResponse.errors[0].message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form>
      <h2>New Venue</h2>
      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Name of venue</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lovely boat"
            onChange={(e) => changeHandler("name", e)}
          />
          {nameError && <span className="text-danger">{nameError}</span>}
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
          {descriptionError && (
            <span className="text-danger">{descriptionError}</span>
          )}
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
          {mediaError && <span className="text-danger">{mediaError}</span>}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Price per night (kr)</Form.Label>
          <Form.Control
            type="number"
            placeholder="200"
            onChange={(e) => changeHandler("price", e)}
          />
          {priceError && <span className="text-danger">{priceError}</span>}
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Max guests</Form.Label>
          <Form.Control
            type="number"
            placeholder="2"
            onChange={(e) => changeHandler("guests", e)}
          />
          {guestsError && <span className="text-danger">{guestsError}</span>}
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
            placeholder="Europe"
            onChange={(e) => changeHandler("location_continent", e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mølleparken 4"
            onChange={(e) => changeHandler("location_address", e)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Oslo"
            onChange={(e) => changeHandler("location_city", e)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Zip code</Form.Label>
          <Form.Control
            type="text"
            placeholder="0459"
            onChange={(e) => changeHandler("location_zip", e)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Norway"
            onChange={(e) => changeHandler("location_country", e)}
          />
        </Form.Group>
      </Row>
      <Button type="submit" onClick={createVenueListing}>
        Create venue
      </Button>
      {registrationError && (
        <span className="text-danger">{registrationError}</span>
      )}
    </Form>
  );
}
