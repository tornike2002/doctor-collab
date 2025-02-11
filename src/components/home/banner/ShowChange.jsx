import React from "react";

export default function ShowChange({
  handleUpdateDescription,
  selectedId,
  title,
  id,
  showOverlay,
  editError,
  handleCloseOverlay,
  e,
}) {
  return (
    <div>
      {showOverlay && selectedId === id && (
        <div className="fixed inset-0 bg-black bg-opacity-50 px-[20px] flex justify-center items-center">
          <form
            onSubmit={(e) => handleUpdateDescription(e, id)}
            className="bg-white w-[400px] p-8 rounded-lg"
          >
            <input
              type="text"
              name="title"
              placeholder="Enter new title"
              className="w-full p-2 border border-gray-300 rounded-lg"
              defaultValue={title}
            />
            {editError && <p className="text-red-500">{editError}</p>}
            <div className="flex mt-[10px] justify-between">
              <button
                type="button"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleCloseOverlay}
              >
                Close
              </button>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
