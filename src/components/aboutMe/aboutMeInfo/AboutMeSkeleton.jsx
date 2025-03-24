import React from "react";

export default function AboutMeSkeleton() {
  return (
    <div>
      <div className="relative px-[10px] inline-block mt-[30px] w-full h-[400px]  rounded-lg animate-pulse">
        <div className="w-full h-full bg-gray-300 rounded"></div>

        <div className="mt-[30px] h-[200px] bg-gray-300 rounded "></div>
      </div>
    </div>
  );
}
