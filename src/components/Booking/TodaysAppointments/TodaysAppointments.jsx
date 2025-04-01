import React from "react";
import AppointmentsCard from "./AppointmentsCard";
import ServiceSkeleton from "../../home/serviciesCard/ServiceSkeleton";
import { bookingGetServicies } from "../../../hooks/bookingGetServicies";

export default function TodaysAppointments() {
  const { data, isLoading, isError, error } = bookingGetServicies();
  console.log(data);
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      <h1 className="p-[20px] font-bold text-[45px]">Today's Appointment</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-[20px] gap-4">
        {data.map((booking) => (
          <div key={booking.id} className="flex justify-center">
            <AppointmentsCard id={booking.id} data={booking} />
          </div>
        ))}
      </div>
    </div>
  );
}
