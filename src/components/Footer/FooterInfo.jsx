import React from "react";

export default function FooterInfo() {
  return (
    <div className="max-w-[500px] text-gray-900 space-y-6">
      <p className="text-lg  leading-relaxed">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore."
      </p>

      <div className="space-y-3 text-base">
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold text-gray-900">Phone Number:</h1>
          <p className="text-gray-600">+999-556-0000</p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold text-gray-900">Email Address:</h1>
          <p className="text-gray-600">portfolio@gmail.com</p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold text-gray-900">Skype ID:</h1>
          <p className="text-gray-600">portfolio@gmail.com</p>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold text-gray-900">Permanent Address:</h1>
          <p className="text-gray-600">Velit officia consequat duis</p>
        </div>
      </div>
    </div>
  );
}
