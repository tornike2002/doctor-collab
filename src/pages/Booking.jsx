import React from "react";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";
import BookingServiceCards from "../components/Booking/BookingServiceContent/BookingServiceCards";
import TodaysAppointments from "../components/Booking/TodaysAppointments/TodaysAppointments";
import CounterBooking from "../components/Booking/CounterBooking/CounterBooking";

export default function Booking() {
  return (
    <div>
      <CounterBooking />
      <BookingServiceCards />
      <TodaysAppointments />
      <BlogCarousel />
    </div>
  );
}
