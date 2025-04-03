import React from "react";
import { useGetTrend } from "../../hooks/useGetTrend";
import TrendBookingCard from "./TrendBookingCard";
import TrendStatistick from "./TrendStatistick";
import TrendBookinSkeleton from "./TrendBookinSkeleton";
import ErrorMessage from "../ErrorMessage";

export default function TrendAppointments() {
  const { data, isLoading, isError, error } = useGetTrend();

  if (isLoading) {
    return <TrendBookinSkeleton />;
  }

  if (isError) return <ErrorMessage errorMessage={error.message} />;
  return (
    <div className="px-[40px]">
      <h1 className="text-[30px] font-bold">Today's Appointment</h1>
      <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
        <div className="flex flex-col gap-[20px]">
          {data.slice(0, 3).map((item) => (
            <div key={item.id}>
              <TrendBookingCard
                data={item}
                age={item.age}
                phone={item.user_phone}
                subTitle={item.user_name}
              />
            </div>
          ))}
        </div>

        <TrendStatistick />
      </div>
    </div>
  );
}
