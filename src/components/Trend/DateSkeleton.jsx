import React from "react";

export default function DateSkeleton() {
  return (
    <div className="mt-[100px]">
      {" "}
      <div className="flex  gap-5">
        <div className="max-w-[366px] w-full flex  gap-3 p-7 border border-[#000] shadow-custom-light bg-[#FAFFFF] animate-pulse">
          <div>
            <div className="h-[24px] w-2/3 bg-gray-300 rounded-md mb-3"></div>

            <div className="h-[28px] w-full bg-gray-300 rounded-md mb-2"></div>
            <div className="h-[28px] w-[60%] bg-gray-300 rounded-md mb-2"></div>

            <div className="h-[24px] w-[40%] bg-gray-300 rounded-md mb-2"></div>
            <div className="h-[24px] w-[80%] bg-gray-300 rounded-md"></div>
          </div>
        </div>
        <div className="max-w-[366px] w-full flex  gap-3 p-7 border border-[#000] shadow-custom-light bg-[#FAFFFF] animate-pulse">
          <div>
            <div className="h-[24px] w-2/3 bg-gray-300 rounded-md mb-3"></div>

            <div className="h-[28px] w-full bg-gray-300 rounded-md mb-2"></div>
            <div className="h-[28px] w-[60%] bg-gray-300 rounded-md mb-2"></div>

            <div className="h-[24px] w-[40%] bg-gray-300 rounded-md mb-2"></div>
            <div className="h-[24px] w-[80%] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
