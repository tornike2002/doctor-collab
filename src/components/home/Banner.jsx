import { useState } from "react";
import { useGetbanner } from "../../hooks/useGetBanner";
import BannerSkeleton from "./banner/BannerSkeleton";
export default function Banner() {
  const { data, error, isError, isLoading } = useGetbanner();
  console.log(data);
  const [updateText, setUpdateText] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);
  const [editError, setEditError] = useState("");
  const { id, title } = data?.title[0] || {};

  const handleUpdateDescription = (e) => {
    e.preventDefault();
    if (!id) return;

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text || text.trim().length < 5) {
      setEditError("Text must be at least 5 characters long.");
    } else {
      setUpdateText((prev) => !prev);
      setButtonChange((prev) => !prev);
      setEditError("");
      updateDescription({ id: id, title: text });
    }
  };

  if (isLoading) {
    return <BannerSkeleton />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  function handleEdit() {
    setUpdateText((prev) => !prev);
    setButtonChange((prev) => !prev);
  }

  return (
    <div>
      {" "}
      <form onSubmit={handleUpdateDescription}>
        <div className="bg-softBlue bg-[#e61818] py-[3.81rem] px-[3.81rem] break-words mt-[8rem] flex justify-between items-center">
          <div className="w-3/4 font-semibold text-[4rem]">
            {updateText ? (
              <input
                type="text"
                name="text"
                placeholder="Update description"
                className={`placeholder:font-normal pl-6 text-[2rem] rounded-lg h-[4rem] ${
                  editError && " border-red-500 border-2"
                }`}
                defaultValue={title}
              />
            ) : (
              title
            )}
            {editError && (
              <p className="text-red-500 text-[1rem] font-normal">
                {editError}
              </p>
            )}
          </div>

          {buttonChange ? (
            <button type="submit" className="text-[1.5rem]">
              Save
            </button>
          ) : (
            <p onClick={handleEdit} className="text-[1.5rem] cursor-pointer">
              Edit Text
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
