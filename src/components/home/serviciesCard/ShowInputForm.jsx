import React from "react";
import deleteIcon from "/public/imgs/delete_sign-256.png";

export default function ShowInputForm({ showInput, handleEditClick }) {
  return (
    <div>
      <div className="flex justify-end pr-4">
        {showInput && (
          <form className="flex flex-col space-y-2 items-start">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Enter service title"
                className="border rounded px-2 py-1"
              />
              <img
                onClick={handleEditClick}
                className="w-[2rem] cursor-pointer"
                src={deleteIcon}
                alt="Delete"
              />
            </div>
            <textarea
              placeholder="Enter Content"
              className="border rounded px-2 py-1"
            />
            <div className="flex items-center">
              <input type="file" className="hidden" />
              <button type="button" className="bg-gray-200 px-2 py-1 rounded">
                Upload Image
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded text-white">
              Add Service
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
