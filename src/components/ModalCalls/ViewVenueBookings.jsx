import React, { useState } from "react";
import { Button, Col, Modal, ModalFooter, Row } from "react-bootstrap";

export default function ViewVenueBookings({ bookedVenueList }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    calculateTotalValue();
    setShow(true);
  };

  const [totalValue, setTotalValue] = useState(0);

  function individualPrice(booking) {
    const vacationStart = new Date(booking.dateFrom);
    const vacationEnd = new Date(booking.dateTo);
    const vacationDuration = Math.abs(
      vacationEnd.getTime() - vacationStart.getTime()
    );
    let numberOfNights = Math.ceil(vacationDuration / (1000 * 3600 * 24));
    if (numberOfNights === 0) numberOfNights = 1;
    return booking.guests * bookedVenueList.price * numberOfNights;
  }

  function calculateTotalValue() {
    let total = 0;
    bookedVenueList.bookings.forEach((booking) => {
      const vacationStart = new Date(booking.dateFrom);
      const vacationEnd = new Date(booking.dateTo);
      const vacationDuration = Math.abs(
        vacationEnd.getTime() - vacationStart.getTime()
      );
      let numberOfNights = Math.ceil(vacationDuration / (1000 * 3600 * 24));
      if (numberOfNights === 0) numberOfNights = 1;
      total += booking.guests * bookedVenueList.price * numberOfNights;
    });
    setTotalValue(total);
  }

  const sortedList = [...bookedVenueList.bookings].sort((a, b) => {
    const dateA = new Date(a.dateFrom);
    const dateB = new Date(b.dateFrom);
    return dateA - dateB;
  });

  return (
    <>
      <div className="d-grid gap-0">
        <Button variant="secondary" onClick={handleShow}>
          View planned vacations
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>HoliDaze</Modal.Title>
        </Modal.Header>
        {sortedList.map((booking) => {
          const startDate = new Date(booking.dateFrom)
            .toLocaleString()
            .split(",")[0];
          const endDate = new Date(booking.dateTo)
            .toLocaleString()
            .split(",")[0];
          return (
            <Col key={booking.id} className="border-bot">
              <p>
                {startDate} to {endDate} ... {booking.guests} guest(s) for a
                total of <strong>{individualPrice(booking)},-</strong>
              </p>
            </Col>
          );
        })}
        <ModalFooter>
          <p>You will get a total of</p>
          <span>
            <strong>{Number(totalValue)},-</strong>
          </span>
        </ModalFooter>
      </Modal>
    </>
  );
}
