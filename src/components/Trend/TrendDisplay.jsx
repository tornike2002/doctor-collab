import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage";
import TrendBookingCard from "./TrendBookingCard";
import TrendCardsFIlter from "./TrendCardsFIlter";
import { useGetTrend } from "../../hooks/useGetTrend";
import DateSkeleton from "./DateSkeleton";

export default function TrendDisplay() {
  const { data, isLoading, isError, error } = useGetTrend();
  const [selectedDate, setSelectedDate] = useState("");
  if (isLoading) {
    return <DateSkeleton />;
  }
  if (isError) {
    return <ErrorMessage errorMsg={error.message} />;
  }

  const filteredData =
    selectedDate === ""
      ? data
      : data.filter((item) => item.date === selectedDate);
  return (
    <div className="p-[40px]">
      <h1 className="font-bold text-[20px]">Filter Data</h1>
      <TrendCardsFIlter
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        data={data}
      />

      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.slice(0, 6).map((item) => (
          <TrendBookingCard
            key={item.id}
            age={item.age}
            subTitle={item.user_name}
            phone={item.user_phone}
          />
        ))}
      </div>
    </div>
  );
}
