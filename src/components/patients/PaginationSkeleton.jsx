import React from "react";

export default function PaginationSkeleton() {
  return (
    <div>
      <div className="flex justify-center bg-gray-300  mt-8 space-x-2">
        {" "}
        <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
      <div className="flex justify-center bg-gray-300  mt-8 space-x-2">
        {" "}
        <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
      <div className="flex justify-center bg-gray-300  mt-8 space-x-2">
        {" "}
        <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
}
