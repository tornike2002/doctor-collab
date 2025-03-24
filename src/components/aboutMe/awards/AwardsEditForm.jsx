import React, { useState } from "react";

export default function AwardsEditForm({
  handleEditSubmit,
  handleCloseEditModal,
  errors,
  award,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl cursor-pointer font-semibold mb-4 break-words">
            Edit Award
          </h2>
          <button
            onClick={handleCloseEditModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <img
              className="w-[20px]"
              src="/imgs/delete_sign-256.png"
              alt="Close"
            />
          </button>
        </div>

        <form onSubmit={handleEditSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Award Name</label>
            <input
              type="text"
              placeholder="Award name"
              name="name"
              defaultValue={award.name}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            {errors?.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Date Received</label>
            <input
              type="date"
              name="date"
              defaultValue={award.date}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            {errors?.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Awarded By</label>
            <input
              type="text"
              placeholder="Organization or institution"
              name="awardedBy"
              defaultValue={award.awardedBy}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-colors"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCloseEditModal}
              className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
