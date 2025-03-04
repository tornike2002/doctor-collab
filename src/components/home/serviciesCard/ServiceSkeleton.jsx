import React from "react";

export default function ServiceSkeleton() {
  return (
    <div>
      <div className="flex justify-end pr-4 mt-20">
        <div className="w-[119.62px] h-[32px] bg-gray-300 rounded mb-2"></div>
      </div>
      <div className="grid grid-cols-1 gap-20 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg p-4 "
          >
            <div className="w-full h-[14rem] bg-gray-300 rounded-lg mb-2"></div>
            <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
