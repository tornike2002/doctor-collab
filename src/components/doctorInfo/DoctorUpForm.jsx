import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function DoctorUpForm({
  setIsModalOpen,
  setName,
  setJobDesc,
  setJobCode,
  jobDesc,
  image,
  setImage,
  name,
  jobcode,
  handleFormSubmit,
}) {
  const middle_pic = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/s3/doctor_storage`;
  const [imagePreview, setImagePreview] = useState(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setImage(middle_pic + "/" + file.name);
    }
  };

  return (
    <Modal>
      <form
        onSubmit={handleFormSubmit}
        className="bg-white z-[-1px] p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Edit Doctor Info</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <input
            type="text"
            name="job_description"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Job Code
          </label>
          <input
            type="text"
            name="job_code"
            value={jobcode} // აქაც jobcode-ს ვიყენებთ
            onChange={(e) => setJobCode(e.target.value)} // ასე მოხდება job_code-ის განახლება
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
