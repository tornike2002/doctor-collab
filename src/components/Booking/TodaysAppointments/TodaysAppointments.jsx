import React from "react";

import AppointmentsCard from "./AppointmentsCard";
import ServiceSkeleton from "../../home/serviciesCard/ServiceSkeleton";
import { bookingGetServicies } from "../../../hooks/bookingGetServicies";

export default function TodaysAppointments() {
  const { data, isLoading, isError, error } = bookingGetServicies();
  console.log(data);
  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div>
      {" "}
      <div className="grid p-[20px] grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((booking) => (
          <div>
            {" "}
            <AppointmentsCard id={booking.id} data={booking} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
