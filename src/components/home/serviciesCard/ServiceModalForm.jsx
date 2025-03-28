import React from "react";

export default function ServiceModalForm({
  handleSubmit,
  service,
  modalFileRef,
  handleDelete,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Edit service title"
            name="title"
            defaultValue={service.title}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            placeholder="Edit service content"
            name="content"
            defaultValue={service.content}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            ref={modalFileRef}
            className="hidden"
            name="image"
          />
          <button
            type="button"
            onClick={() => modalFileRef.current?.click()}
            className="bg-gray-200 px-4 py-2 rounded border border-gray-300"
          >
            Upload Image
          </button>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Save Changes
          </button>

          <p
            className="bg-red-500 px-4 py-2 rounded text-white cursor-pointer text-center"
            onClick={() => handleDelete(service.id)}
          >
            Delete Service
          </p>
        </div>
      </form>
    </div>
  );
}
