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
    <div>
      <div className="grid grid-cols-5 bg-[#0682f5c9] py-3 items-center relative font-semibold text-gray-800 border-b border-gray-300">
        <p className="px-3 text-lg">{item.user_name}</p>
        <p className="px-3 text-lg">{item.date}</p>
        <p className="px-3 text-lg">{item.condition}</p>

        {isEditingStatus ? (
          <div className="flex gap-2 px-3">
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className="rounded-[3rem] py-2 px-3 border border-gray-400 shadow-sm text-lg"
            >
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
            <button
              onClick={saveStatus}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-lg shadow-md"
            >
              Save
            </button>
          </div>
        ) : (
          <p
            className={`px-3 text-lg text-center rounded-[3rem] py-2 font-bold shadow-md cursor-pointer transition-all duration-200 ${
              item.status === "Pending"
                ? "bg-darkBlue text-white hover:bg-blue-900"
                : "bg-green-700 text-white hover:bg-green-900"
            }`}
            onClick={handleStatusClick}
          >
            {item.status}
          </p>
        )}

        <p
          className="px-3 text-lg text-center text-blue-700 font-bold cursor-pointer hover:underline"
          onClick={() => handleMoreClick(item)}
        >
          More
        </p>
      </div>
    </div>
  );
}
