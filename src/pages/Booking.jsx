import React from "react";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";
import BookingServiceCards from "../components/Booking/BookingServiceContent/BookingServiceCards";
import TodaysAppointments from "../components/Booking/TodaysAppointments/TodaysAppointments";

export default function Booking() {
  return (
    <div>
      <BookingServiceCards />
      <TodaysAppointments />
      <BlogCarousel />
    </div>
  );
}
