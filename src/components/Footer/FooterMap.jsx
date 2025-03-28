import React from "react";

export default function FooterMap({ title }) {
  return (
    <div className="p-[10px]">
      <div className="space-y-3 text-base">
        <div className="overflow-hidden text-ellipsis">
          <h1 className="font-semibold text-gray-900">Text</h1>
          <p className="text-gray-600">{title.text}</p>
        </div>
        <div className="flex gap-3 items-center overflow-hidden text-ellipsis">
          <h1 className="font-semibold text-gray-900">Phone Number:</h1>
          <p className="text-gray-600">{title.phone}</p>
        </div>
        <div className="flex gap-3 items-center overflow-hidden text-ellipsis">
          <h1 className="font-semibold text-gray-900">Email Address:</h1>
          <p className="text-gray-600">{title.email}</p>
        </div>
        <div className="flex gap-3 items-center overflow-hidden text-ellipsis">
          <h1 className="font-semibold text-gray-900">Address:</h1>
          <p className="text-gray-600">{title.address}</p>
        </div>
        <div className="flex gap-3 items-center overflow-hidden text-ellipsis">
          <h1 className="font-semibold text-gray-900">LinkedIn:</h1>
          <p className="text-gray-600">{title.linkedin}</p>
        </div>
      </div>
    </div>
  );
}
