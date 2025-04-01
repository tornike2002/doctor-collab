import React from "react";
import check from "/public/imgs/newbooking.svg";
import { useNavigate } from "react-router-dom";

export default function BookingService({ service }) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/booking/${service.id}`);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={navigateHandler}
      className="bg-white shadow-md rounded-lg p-[10px] w-[300px] h-[240px] cursor-pointer overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between py-6 px-4"
    >
      <div className="flex flex-col gap-[80px]">
        <img
          src={check}
          alt={service.condition || "Service icon"}
          className="w-[83px] h-[83px] object-contain"
        />
        <h1 className="text-[#101012] text-[17px]">{service.condition}</h1>
      </div>
    </div>
  );
}
