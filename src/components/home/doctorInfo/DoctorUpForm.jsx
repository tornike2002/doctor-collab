import React from "react";
import Modal from "../../Modal/Modal";

export default function DoctorUpForm({
  setIsModalOpen,
  doctorData,
  setDoctorData,
  handleFormSubmit,
  imagePreview,

  full_name,
  fileRef,
  job_description,
  job_code,
}) {
  return (
    <Modal>
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Edit Doctor Info</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            value={full_name}
            onChange={(e) => {
              if (e.target.value.length <= 13) {
                setDoctorData((prev) => ({
                  ...prev,
                  full_name: e.target.value,
                }));
              }
            }}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500"
          />
          {full_name.length > 13 && (
            <p className="text-red-500 text-sm">
              Name must be less than 13 characters.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <input
            type="text"
            name="job_description"
            value={job_description}
            onChange={(e) => {
              if (e.target.value.length <= 20) {
                setDoctorData((prev) => ({
                  ...prev,
                  job_description: e.target.value,
                }));
              }
            }}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500"
          />
          {job_description.length > 20 && (
            <p className="text-red-500 text-sm">
              Job description must be less than 20 characters.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Job Code
          </label>
          <input
            type="text"
            name="job_code"
            value={job_code}
            onChange={(e) => {
              if (e.target.value.length <= 30) {
                setDoctorData((prev) => ({
                  ...prev,
                  job_code: e.target.value,
                }));
              }
            }}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500"
          />
          {job_code.length > 30 && (
            <p className="text-red-500 text-sm">
              Job code must be less than 30 characters.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 w-20 h-20 rounded-lg"
            />
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
