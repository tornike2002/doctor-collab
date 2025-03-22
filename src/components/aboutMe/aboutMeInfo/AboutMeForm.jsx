import React from "react";

export default function AboutMeForm({
  handleFormData,
  handleImageChange,
  imagePreview,
  handleModalOpen,
  fileRef,
  text
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] flex flex-col gap-6">
        <h1 className="font-poppinsSemiBold text-black text-[21px]">
          Upload Blog Cover
        </h1>
        <form onSubmit={handleFormData}>
          <div className="flex flex-col gap-2 w-full">
            <textarea
              type="text"
              name="text"
              defaultValue={text}
              placeholder="Enter text"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-2 w-full">
            <input
            type="file"
            ref={fileRef}
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300"
            accept="image/*"
          />
              {imagePreview && (
                <div className="mt-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-xl px-5 py-2 hover:bg-blue-600 transition"
            >
              Edit
            </button>

            <button
              type="button"
              className="bg-gray-400 text-white rounded-xl px-5 py-2 hover:bg-gray-500 transition"
              onClick={handleModalOpen}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
