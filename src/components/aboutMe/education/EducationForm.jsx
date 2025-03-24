import React from "react";

export default function EducationForm({
  handleAddSubmit,
  isPresent,
  setIsPresent,
  errors,
  handleClose,
}) {
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add Education
        </h2>
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Institution
            </label>
            <input
              type="text"
              name="uni"
              placeholder="University / School"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors?.uni && (
              <p className="text-red-500 text-sm">{errors.uni}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Degree</label>
            <input
              type="text"
              name="degree"
              placeholder="Bachelor's, Master's, etc."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors?.degree && (
              <p className="text-red-500 text-sm">{errors.degree}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Start Date
            </label>
            <input
              type="date"
              name="dateFrom"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors?.dateFrom && (
              <p className="text-red-500 text-sm">{errors.dateFrom}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-gray-700 font-medium">
                End Date
              </label>
              <input
                type="date"
                name="dateTo"
                disabled={isPresent}
                className={`w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 ${
                  isPresent ? "bg-gray-200 cursor-not-allowed" : ""
                }`}
              />
              {errors?.dateTo && (
                <p className="text-red-500 text-sm">{errors.dateTo}</p>
              )}
            </div>
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <input
                type="checkbox"
                checked={isPresent}
                onChange={() => setIsPresent(!isPresent)}
                className="w-5 h-5 text-blue-500"
              />
              Present
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Add Education
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="w-full bg-gray-400 text-white p-3 rounded-md hover:bg-gray-500 transition-all duration-300 mt-2"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
