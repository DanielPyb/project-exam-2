import { Row, Col, Button, Container } from "react-bootstrap";
import ImageCaroussel from "./ImageCaroussel";
import CreateBookingModal from "./ModalCalls/CreateBookingModal";
import PickedDates from "./PickedDates";

export default function SingelListing({
  name,
  description,
  media,
  location,
  price,
  id,
  meta,
  bookings,
}) {
  return (
    <>
      <Container>
        <div className="burn-card-top">
          <ImageCaroussel media={media} />
          <div className="burn-card-image">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="burn-card-title">
            <h2>Includes</h2>
            <ul>
              {Object.keys(meta).map((key) => {
                if (meta[key]) {
                  if (key == "pets") {
                    return <li key={key}>pet friendly</li>;
                  }
                  return <li key={key}>{key}</li>;
                }
                return null;
              })}
              Date range for one datepicker with disabled dates highlighted
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
