import React from 'react';

export default function BlogForm({ onClose }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200 w-4 h-4 cursor-pointer"
      >
        &times;
      </button>
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Create a Blog Post
      </h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="slug" className="text-sm font-medium text-gray-700">
            Slug:
          </label>
          <input
            type="text"
            name="slug"
            placeholder="Enter slug"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">
            Time (in minutes):
          </label>
          <input
            type="number"
            name="time"
            placeholder="Enter time"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-sm font-medium text-gray-700">
            Content:
          </label>
          <textarea
            name="content"
            placeholder="Enter content"
            minLength={100}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">
            Upload Image:
          </label>
          <input
            type="file"
            name="image"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 px-4 py-2 rounded-lg text-white font-medium transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}