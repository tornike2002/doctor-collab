import React from "react";
import Chart from "../components/Booking/chart/Chart";

import BookingServiceCards from "../components/Booking/BookingServiceContent/BookingServiceCards";
import TrendAppointments from "../components/Trend/TrendAppointments";
import TrendDisplay from "../components/Trend/TrendDisplay";

export default function Trend() {
  return (
    <div>
      <h1 className="font-bold text-[60px] px-[30px]">
        Patient trend over months
      </h1>
      <Chart />
      <TrendAppointments />
      <TrendDisplay />
      <BookingServiceCards />
    </div>
  );
}
