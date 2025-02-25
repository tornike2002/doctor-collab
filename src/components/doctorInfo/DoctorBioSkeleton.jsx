import React from "react";

export default function DoctorBioSkeleton() {
  return (
    <div className="flex mt-[100px] justify-end items-center ">
      <div className="w-full relative  z-10   ml-[100px]  max-w-[300px] h-[400px] bg-gray-200 rounded-lg p-6 flex flex-col justify-center "></div>

      <div className="w-full  relative z-1   max-w-[700px] h-[600px] bg-gray-200 rounded-lg p-6 flex flex-col justify-center space-y-4 ">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-2/4"></div>
        <div className="h-6 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
