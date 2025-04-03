import React from "react";

export default function TrendBookingCard({subTitle, age, phone }) {

  return (
    <div className="max-w-[366px]  w-full flex flex-col gap-3 p-7 border border-[#000] shadow-custom-light bg-[#FAFFFF]">
      <h1 className="text-xl font-bold">Patient: {subTitle}</h1>
      <h1 className="text-xl font-bold">Age: {age}</h1>
      <h1 className="text-xl font-bold">Number: {phone}</h1>
    </div>
  );
}
