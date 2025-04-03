import React from "react";
import { useGetPatients } from "../../../hooks/useGetPatients";
import CounterBookingContent from "./CounterBookingContent";
import TotalBookingSkeleton from "./TotalBookingSkeleton";
import ErrorMessage from "../../ErrorMessage";

export default function CounterBooking() {
  const { data, isError, isLoading, error } = useGetPatients();
  if (isLoading) return <TotalBookingSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;
  return (
    <div className="flex justify-center items-center">
      {" "}
      <CounterBookingContent
        appointment={"Appointment Statistics"}
        month={"This Month"}
        total={data?.length}
      />
    </div>
  );
}
