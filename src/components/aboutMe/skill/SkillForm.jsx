import React from "react";

export default function SkillForm({
  handleAddSubmit,

  handleClose,
  errors = {},
}) {
  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        <button
          onClick={handleClose} // Calls handleClose when clicked
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add Experience
        </h2>
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Place</label>
            <input
              type="text"
              name="skil"
              placeholder="Company / Organization"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors?.skil && (
              <p className="text-red-500 text-sm">{errors.skil}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              description
            </label>
            <textarea
              type="text"
              name="description"
              placeholder="description / Team"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {errors?.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Add Experience
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
