import React from "react";

export default function AwardsForm({ handleAddAward, handleClose, errors }) {
  return (
    <div className="awards-form">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add Award
        </h2>

        <form onSubmit={handleAddAward} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Award Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter award name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date Received
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="awardedBy"
              className="block text-gray-700 font-medium"
            >
              Awarded By (optional)
            </label>
            <input
              type="text"
              id="awardedBy"
              name="awardedBy"
              placeholder="Organization or institution"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors.awardedBy && (
              <p className="text-red-500 text-sm mt-1">{errors.awardedBy}</p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Add Award
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
