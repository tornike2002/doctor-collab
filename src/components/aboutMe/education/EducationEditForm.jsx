import React from "react";

export default function EducationEditForm({
  handleEditSubmit,
  handleCloseEditModal,
  isPresent,
  setIsPresent,
  errors,
  experience,
}) {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl cursor-pointer font-semibold mb-4 break-words">
              Edit Education
            </h2>
            <img
              className="w-[20px] cursor-pointer"
              onClick={handleCloseEditModal}
              src="/imgs/delete_sign-256.png"
              alt="Close"
            />
          </div>

          <form onSubmit={handleEditSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">uni</label>
              <input
                type="text"
                placeholder="Edit uni"
                name="uni"
                defaultValue={experience.uni}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              {errors?.uni && (
                <p className="text-red-500 text-sm">{errors.uni}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">degree</label>
              <input
                type="text"
                placeholder="Edit degree"
                name="degree"
                defaultValue={experience.degree}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              {errors?.department && (
                <p className="text-red-500 text-sm">{errors.department}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="dateFrom"
                defaultValue={experience.dateFrom}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              {errors?.dateFrom && (
                <p className="text-red-500 text-sm">{errors.dateFrom}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  name="dateTo"
                  defaultValue={experience.dateTo}
                  disabled={isPresent}
                  className={`border border-gray-300 rounded px-4 py-2 w-full ${
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

            <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded text-white"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={handleCloseEditModal}
                className="bg-red-500 px-4 py-2 rounded text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
