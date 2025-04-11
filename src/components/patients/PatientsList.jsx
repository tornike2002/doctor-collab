import React, { useState } from "react";

export default function PatientsList({ item, handleMoreClick, handleUpdate }) {
  const [selectedStatus, setSelectedStatus] = useState(item.status);
  const [isEditingStatus, setIsEditingStatus] = useState(false);

  const handleStatusClick = () => {
    if (item.status !== "Done") {
      setIsEditingStatus(true);
    }
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const saveStatus = () => {
    if (item.status !== "Pending" || selectedStatus !== "Pending") {
      handleUpdate(item.id, { status: selectedStatus });
    }
    setIsEditingStatus(false);
  };

  return (
    <div className="px-2">
      <div className="grid grid-cols-5 items-center py-4 border-b border-gray-300 font-medium text-gray-800 text-sm md:text-base">
        <div className="text-center px-2 truncate">{item.user_name}</div>
        <div className="text-center px-2">{item.date}</div>
        <div className="text-center px-2 truncate">{item.condition}</div>

        <div className="flex justify-center items-center px-2">
          {isEditingStatus ? (
            <div className="flex gap-2 items-center">
              <select
                value={selectedStatus}
                onChange={handleStatusChange}
                className="rounded-full py-1 px-3 border border-gray-400 shadow-sm text-sm"
              >
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
              </select>
              <button
                onClick={saveStatus}
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm shadow"
              >
                Save
              </button>
            </div>
          ) : (
            <p
              className={`py-1 px-3 text-sm font-semibold rounded-full text-white cursor-pointer shadow-md transition-all ${
                item.status === "Pending"
                  ? "bg-[#0b2e4e] hover:bg-blue-900"
                  : "bg-green-700 hover:bg-green-900"
              }`}
              onClick={handleStatusClick}
            >
              {item.status}
            </p>
          )}
        </div>

        <div className="text-center px-2">
          <button
            className="text-blue-700 font-bold hover:underline text-sm"
            onClick={() => handleMoreClick(item)}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}
