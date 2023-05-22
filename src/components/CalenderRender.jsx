import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalenderRender({bookings}) {
  const occupiedDays = bookings.reduce((dates, booking) =>{
    const {dateFrom, dateTo} = booking
    const holidayStart = new Date(dateFrom);
    const holidayEnd = new Date(dateTo);

    let current = holidayStart;
    current.setHours(0, 0, 0, 0);

    while (current <= holidayEnd){
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
  }, []);

  const isMutedDate = (date) => {
    return occupiedDays.some((occupiedDay) => {
      return date.getTime() === occupiedDay.getTime();
    });
  };

  console.log(occupiedDays);
  return (
    <div>
      <DatePicker
        inline
        selected={null}
        highlightDates={[
          {
            className: "mute",
            dates: occupiedDays.filter((date) => date >= new Date()),
          },
        ]}
        dayClassName={(date) => (isMutedDate(date) ? "mute" : null)}
      />
    </div>
  );
};

