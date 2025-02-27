import React from "react";

export default function ShowInputForm({ showInput }) {
  return (
    <div>
      <div className="flex justify-end pr-4">
        {showInput ? (
          <form className="flex flex-col space-y-2 items-start">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Enter service title"
                className="border rounded px-2 py-1"
              />
            </div>
            <textarea
              type="text"
              placeholder="Enter Content"
              className="border rounded px-2 py-1"
            />
            <div className="flex items-center">
              <input type="file" className="hidden" />
              <button type="button" className="bg-gray-200 px-2 py-1 rounded">
                Upload Image
              </button>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400  px-4 py-1 rounded text-white"
            >
              Add Service
            </button>
          </form>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
