export default function SettingsForm({ settingData, handleSumbit }) {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg max-w-lg mx-auto transform transition duration-500 ease-in-out  hover:shadow-xl">
      <form onSubmit={handleSumbit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            TEXT
          </label>
          <label
            htmlFor="text"
            className="text-sm font-medium text-gray-700"
          ></label>
          <textarea
            rows={4}
            name="text"
            id="text"
            defaultValue={settingData.text}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter footer text"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={settingData.email}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            defaultValue={settingData.phone}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter phone number"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={settingData.address}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter address"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="linkedin"
            className="text-sm font-medium text-gray-700"
          >
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            defaultValue={settingData.linkedin}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            placeholder="Enter LinkedIn URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
