import { Row, Col, Container } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import CreateBookingModal from "../ModalCalls/CreateBookingModal";
import PickedDates from "../APIcalls/PickedDates";

export default function SingelListing({ listingInfo }) {
  //deconstructing object for cleaner code
  const {
    name,
    description,
    media,
    location,
    price,
    id,
    meta,
    bookings,
    maxGuests,
  } = listingInfo;
  return (
    <>
      <Container>
        <div className="burn-card-top">
          <ImageCaroussel media={media} />
          <h1>{name}</h1>
          <Row xs={1} md={2}>
            <Col>
              <h2>About</h2>
              <p>{description}</p>
            </Col>
            <Col>
              <div className="burn-card-title">
                <h2>Includes</h2>
                <ul>
                  {Object.keys(meta).map((key) => {
                    if (meta[key]) {
                      if (key === "pets") {
                        return <li key={key}>pet friendly</li>;
                      }
                      return <li key={key}>{key}</li>;
                    }
                    return null;
                  })}
                  <li>space for {maxGuests} guests</li>
                </ul>
              </div>
              <div className="burn-card-title">
                <h2>Availability</h2>
                <PickedDates bookings={bookings} />
              </div>
              <div className="burn-card-title">
                <h2>Location</h2>
                <p>{location.country}</p>
                <p>
                  {location.address}, {location.zip} -{" "}
                  <strong>{location.city}</strong>
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="burn-card-booking">
          <Row>
            <Col>
              <p>{price},- per night</p>
            </Col>
            <Col>
              <CreateBookingModal venueId={id} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
