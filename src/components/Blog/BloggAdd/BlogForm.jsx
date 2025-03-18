export default function BlogForm({ onSubmit, onClose, errors }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-md flex flex-col gap-6">
    <button
          className="absolute top-1 right-4 text-gray-500 hover:text-gray-700 hover:scale-110"
        onClick={onClose}
        >
          ✕
        </button>
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Create a Blog Post
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
              errors.title ? "border-red-500 border-2" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="slug" className="text-sm font-medium text-gray-700">
            Slug:
          </label>
          <input
            type="text"
            name="slug"
            placeholder="Enter slug"
            className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
              errors.slug ? "border-red-500 border-2" : "border-gray-300"
            }`}
          />
          {errors.slug && (
            <p className="text-red-500 text-sm">{errors.slug}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reading_time" className="text-sm font-medium text-gray-700">
            Time (in minutes):
          </label>
          <input
            type="number"
            name="reading_time"
            placeholder="Enter reading_time"
            className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
              errors.reading_time ? "border-red-500 border-2" : "border-gray-300"
            }`}
          />
          {errors.reading_time && (
            <p className="text-red-500 text-sm">{errors.reading_time}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Content:
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            minLength={100}
           
         
            className={`border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
              errors.description ? "border-red-500 border-2" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
       
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="img"
            className="text-sm font-medium text-gray-700"
          >
            Upload Image:
          </label>
          <input
            type="file"
            name="img"
          
            className={`border rounded-lg px-3 py-2 ${
              errors.img ? "border-red-500 border-2" : "border-gray-300"
            }`}
          />
          {errors.img && (
            <p className="text-red-500 text-sm">{errors.img}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 px-4 py-2 rounded-lg text-white font-medium transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
}