import React from "react";
import { useGetHeroImage } from "../../../hooks/useGetHeroImage";
import { useUptHeroImage } from "../../../hooks/useUptHeroImage";
import ErrorMessage from "../../ErrorMessage";
import HeroContent from "./HeroContent";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../../services/supabase";
import AboutMeSkeleton from "../../aboutMe/aboutMeInfo/AboutMeSkeleton";

export default function HeroImg() {
  const { data, isLoading, isError, error } = useGetHeroImage();
  const { mutate: UptHeroImage } = useUptHeroImage();
  const fileRef = React.useRef(null);

  const handleFormData = async (event, item) => {
    event.preventDefault();
    const imgFile = fileRef.current?.files[0];

    if (!item?.id) {
      toast.error("Invalid hero image data");
      return;
    }

    let imageUrl = item.img;

    if (!imgFile) {
      return toast.error("No changes detected.");
    }
    if (imgFile) {
      const imageName = `${uuidv4()}_${imgFile.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from("doctor_storage")
        .upload(imageName, imgFile);

      if (error) {
        console.error("Image upload error: ", error);
        return toast.error("Failed to upload image.");
      }
      imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
    }

    UptHeroImage({ id: item.id, img: imageUrl });
    toast.success("Blog Hero updated successfully.");
  };

  if (isLoading) return <AboutMeSkeleton />;
  if (isError) return <ErrorMessage errorMessage={error.message} />;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <HeroContent
            data={item}
            fileRef={fileRef}
            handleFormData={(e) => handleFormData(e, item)}
          />
        </div>
      ))}
    </div>
  );
}
