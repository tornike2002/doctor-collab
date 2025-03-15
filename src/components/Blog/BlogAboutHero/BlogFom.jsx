

export default function BlogFom({
  handleFormSubmit,
  HeroTitle,
  HeroSubTitle,
  handleImagePreview,
  fileRef,
  imagePreview,
  handleModalOpen,
}) {
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            defaultValue={HeroTitle}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="sub_title"
            placeholder="Enter Subtitle"
            defaultValue={HeroSubTitle}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-col gap-2 w-full">
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleImagePreview}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
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
            onClick={handleModalOpen}
            className="bg-gray-400 text-white rounded-xl px-5 py-2 hover:bg-gray-500 transition"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
