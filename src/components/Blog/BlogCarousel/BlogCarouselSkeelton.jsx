import React from "react";

export default function BlogCarouselSkeelton() {
  return (
    <div>
      <div className=" rounded-md  p-3 h-[550px] mt-[100px] flex gap-[10px] cursor-pointer mb-8 animate-pulse">
        <div className="h-[337px] w-full max-w-[427px] bg-gray-300 rounded"></div>
        <div className="h-[337px] w-full max-w-[427px] bg-gray-300 rounded"></div>
        <div className="h-[337px] w-full max-w-[427px] bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
