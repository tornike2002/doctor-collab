import React from "react";

export default function SkillEdit({
  handleEditSubmit,
  handleCloseEditModal,

  errors,
  experience,
}) {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl cursor-pointer font-semibold mb-4 break-words">
              Edit Skill
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
              <label className="block text-gray-700 mb-2">skill</label>
              <input
                type="text"
                placeholder="Edit skil"
                name="skil"
                defaultValue={experience.skil}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              {errors?.skil && (
                <p className="text-red-500 text-sm">{errors.skil}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">description</label>
              <input
                type="text"
                placeholder="Edit department"
                name="description"
                defaultValue={experience.description}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
              {errors?.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
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
