import { useState } from "react";
import { useGetbanner } from "../../../hooks/useGetBanner";
import threedots from "/public/imgs/7066144.png";
import { UpdateBanner } from "../../../services/homeServices";

export default function Banner() {
  const { data, error, isError, isLoading } = useGetbanner();
  const { id, title } = data?.title ? data.title[0] || {} : {};
  const [showBox, setShowBox] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [editError, setEditError] = useState("");
  const updateTitle = UpdateBanner();

  const handleUpdateDescription = (e) => {
    e.preventDefault();
    if (!id) return;

    const formData = new FormData(e.target);
    const text = formData.get("title");

    if (!text || text.trim().length < 5) {
      setEditError("Text must be at least 5 characters long.");
    } else {
      setEditError("");
      updateTitle({ id: id, title: text });
    }
  };

  const handleThreedotsClick = () => {
    setShowBox((prev) => !prev);
  };

  const handleChangeClick = () => {
    setShowOverlay(true);
    setShowBox(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="bg-softBlue bg-[#CBDEEF] break-words mt-[8rem] flex justify-between items-center py-[3.81rem] px-[3.81rem]">
        <div className="text-[4rem]">
          <h1 className="font-extrabold">{title}</h1>
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
          <form
            onSubmit={handleUpdateDescription}
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
