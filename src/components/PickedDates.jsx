import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

export default function PickedDates({ bookings }) {
  const mutedDates = bookings.reduce((dates, booking) => {
    const { dateFrom, dateTo } = booking;
    const vacationStart = new Date(dateFrom);
    const vacationEnd = new Date(dateTo);

    let current = vacationStart;
    current.setHours(0, 0, 0, 0);

    while (current <= vacationEnd) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }, []);

  return (
    <div>
      <ReactDatePicker inline monthsShown={2} excludeDates={mutedDates} />
    </div>
  );
}
