import { useState } from "react";
import { useGetbanner } from "../../../hooks/useGetBanner";
import threedots from "/public/imgs/7066144.png";
import useUpdateBanner from "../../../hooks/useUpDataBaner";
import BannerSkeleton from "./BannerSkeleton";
import ShowChange from "./ShowChange";
import TextTitle from "./TextTitle";
import BannerSkeleton from "./BannerSkeleton";
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
    return <BannerSkeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.title.map((item) => (
        <div key={item.id}>
          <TextTitle
            handleChangeClick={handleChangeClick}
            handleThreedotsClick={handleThreedotsClick}
            threedots={threedots}
            title={item.title}
            showBox={showBox}
            id={item.id}
          />

          <ShowChange
            selectedId={selectedId}
            showOverlay={showOverlay}
            id={item.id}
            editError={editError}
            handleUpdateDescription={handleUpdateDescription}
            handleCloseOverlay={handleCloseOverlay}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}
