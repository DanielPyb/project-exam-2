import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { APIPostVenue } from "../APIcalls/ApiCalls";
import { accessToken } from "../APIcalls/accessToken";

export default function NewVenueForm({ onUpdateVenue }) {
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

  //Todo facilities = {wifi, parking, pet, breakfast}
  //Todo location = {continent, address, city, zip, country}

  const [nameError, setNameError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [mediaError, setMediaError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [guestsError, setGuestsError] = useState(null);

  //facilities states
  const [facilities_wifiError, setFacilities_wifiError] = useState(null);
  const [facilities_parkingError, setFacilities_parkingError] = useState(null);
  const [facilities_petError, setFacilities_petError] = useState(null);
  const [facilities_breakfastError, setFacilities_breakfastError] =
    useState(null);
  //location states
  const [location_continentError, setLocation_continentError] = useState(null);
  const [location_addressError, setLocation_addressError] = useState(null);
  const [location_cityError, setLocation_cityError] = useState(null);
  const [location_zipError, setLocation_zipError] = useState(null);
  const [location_countryError, setLocation_countryError] = useState(null);

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
        break;
      default:
        break;
    }
  }

  async function createVenueListing(e) {
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
    await APIPostVenue(venueObject, accessToken);
    onUpdateVenue();
    console.log(venueObject);
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
            placeholder="200"
            onChange={(e) => changeHandler("price", e)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Max guests</Form.Label>
          <Form.Control
            type="number"
            placeholder="2"
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
    </Form>
  );
}
