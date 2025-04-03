import React from "react";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";
import BookingServiceCards from "../components/Booking/BookingServiceContent/BookingServiceCards";
import TodaysAppointments from "../components/Booking/TodaysAppointments/TodaysAppointments";
import CounterBooking from "../components/Booking/CounterBooking/CounterBooking";
import Chart from "../components/Booking/chart/Chart";

export default function Booking() {
  return (
    <div>
      <CounterBooking />
      <Chart />
      <BookingServiceCards />
      <TodaysAppointments />
      <BlogCarousel />
    </div>
  );
}
