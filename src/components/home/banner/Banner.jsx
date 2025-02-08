import { useState } from "react";
import { useGetbanner } from "../../../hooks/useGetBanner";
import threedots from "/public/imgs/7066144.png";

export default function Banner() {
  const { data, error, isError, isLoading } = useGetbanner();
  const { id, title } = data?.title ? data.title[0] || {} : {};
  const [showBox, setShowBox] = useState(false); // Controls the visibility of the small box
  const [showOverlay, setShowOverlay] = useState(false); // Controls the visibility of the overlay

  // Toggle the small box visibility
  const handleThreedotsClick = () => {
    setShowBox((prev) => !prev);
  };

  // Show the overlay and hide the small box
  const handleChangeClick = () => {
    setShowOverlay(true);
    setShowBox(false);
  };

  // Close the overlay
  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  return (
    <div>
      <div className="bg-softBlue bg-[#CBDEEF] break-words mt-[8rem] flex justify-between items-center pt-[3rem] pb-[10rem]">
        <div className="text-[4rem]">
          <h1>{title}</h1>
        </div>
        <div className="relative">
          <img
            className="w-[50px] cursor-pointer"
            src={threedots}
            alt="Options"
            onClick={handleThreedotsClick}
          />

          {showBox && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleChangeClick}
              >
                Change
              </button>
            </div>
          )}
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <input
              type="text"
              placeholder="Enter new title"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-between ">
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleCloseOverlay}
              >
                Close
              </button>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
