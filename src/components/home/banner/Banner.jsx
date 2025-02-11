import { useState } from "react";
import { useGetbanner } from "../../../hooks/useGetBanner";
import threedots from "/public/imgs/7066144.png";
import useUpdateBanner from "../../../hooks/useUpDataBaner";

export default function Banner() {
  const { data, error, isError, isLoading } = useGetbanner();

  const [showBox, setShowBox] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [editError, setEditError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { mutate: updateTitle } = useUpdateBanner();

  const handleUpdateDescription = (e, id) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("title");

    console.log(id);
    if (!text || text.trim().length < 5) {
      setEditError("Text must be at least 5 characters long.");
    } else {
      setEditError("");
      updateTitle({ title: text, id: id });
      setShowOverlay(false);
    }
  };

  const handleThreedotsClick = () => {
    setShowBox((prev) => !prev);
  };

  const handleChangeClick = (id) => {
    setSelectedId(id);
    setShowOverlay(true);
    setShowBox(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedId(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.title || data.title.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {data.title.map((item) => (
        <div key={item.id}>
          <div className="bg-softBlue bg-[#CBDEEF] break-words mt-[8rem] flex justify-between items-center lg:py-[3.81rem] py-[1.81rem]  lg:px-[3.81rem] px-[1.81rem]">
            <div className="text-[4rem]">
              <h1 className="font-extrabold text-[25px] lg:text-[80%] w-[200px] lg:w-[700px]">
                {item.title}
              </h1>
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
                    onClick={() => handleChangeClick(item.id)}
                  >
                    Change
                  </button>
                </div>
              )}
            </div>
          </div>

          {showOverlay && selectedId === item.id && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <form
                onSubmit={(e) => handleUpdateDescription(e, item.id)}
                className="bg-white w-[400px] p-8 rounded-lg"
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Enter new title"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  defaultValue={item.title}
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
      ))}
    </div>
  );
}
