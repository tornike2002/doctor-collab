import React from "react";
import Chart from "../components/Booking/chart/Chart";

import BookingServiceCards from "../components/Booking/BookingServiceContent/BookingServiceCards";

export default function Trend() {
  return (
    <div>
      <h1 className="font-bold text-[60px] px-[30px]">
        Patient trend over months
      </h1>
      <Chart />

      <BookingServiceCards />
    </div>
  );
}
