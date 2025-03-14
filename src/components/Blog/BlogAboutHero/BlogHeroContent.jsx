import React, { useRef, useState } from "react";
import BlogHeroModalContent from "./BlogHeroModalContent";
import Modal from "../../Modal/Modal";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import useUpdateBlogHero from "../../../hooks/useUpdateBlogHero ";
import threedot from "/imgs/7066144.png";
import supabase from "../../../services/supabase";

export default function BlogHeroContent({
  HeroImg,
  HeroTitle,
  HeroSubTitle,
  id,
}) {
  const fileRef = useRef();
  const [modalToggle, setModalToggle] = useState(false);
  const [imagePreview, setImagePreview] = useState(HeroImg);

  const { mutate: updateBlogHero } = useUpdateBlogHero();

  const handleModalOpen = () => {
    setModalToggle((prev) => !prev);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const imgFile = fileRef.current?.files[0];
    const formData = new FormData(event.target);
  
    // Get updated form data
    const updatedData = {
      id,
      title: formData.get("title").trim(),
      subtitle: formData.get("sub_title").trim(),
    };
  
    // Ensure the text length validation
    if (updatedData.title.length < 3 || updatedData.title.length > 20) {
      return toast.error("Title must be between 3 and 20 characters.");
    }
    if (updatedData.subtitle.length < 5 || updatedData.subtitle.length > 30) {
      return toast.error("Subtitle must be between 5 and 30 characters.");
    }
  
    // Check if there are any changes to text or image
    if (
      updatedData.title === HeroTitle &&
      updatedData.subtitle === HeroSubTitle &&
      !imgFile
    ) {
      return toast.error("No changes detected.");
    }
  
    let imageUrl = HeroImg; // Default to current image if no new image is uploaded
    
    // If an image file was uploaded, upload it to Supabase
    if (imgFile) {
      const imageName = `${uuidv4()}_${imgFile.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from("doctor_storage")
        .upload(imageName, imgFile);
  
      if (error) {
        return toast.error("Failed to upload image.");
      }
  
      
      imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
    }
  
   
    updateBlogHero({ ...updatedData, img: imageUrl });
  
   
    setModalToggle(false);
    setImagePreview(imageUrl);
  
   
    toast.success("Blog Hero updated successfully.");
  };
  

  return (
    <div
      className={`relative min-h-[390px] sm:min-h-[557px] lg:min-h-screen 
        flex items-center max-w-full bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url("${imagePreview}")` }}
    >
      <div className="absolute top-4 right-4">
        <img
          src={threedot}
          alt="dots"
          className="w-10 h-10 cursor-pointer object-cover object-center"
          onClick={handleModalOpen}
        />
      </div>

      {modalToggle && (
        <Modal>
          <BlogHeroModalContent
            HeroTitle={HeroTitle}
            HeroSubTitle={HeroSubTitle}
            handleModalOpen={handleModalOpen}
            handleFormSubmit={handleFormSubmit}
            fileRef={fileRef}
            handleImagePreview={handleImagePreview}
            imagePreview={imagePreview}
          />
        </Modal>
      )}

      <div className="flex flex-col justify-end gap-3 px-[36px] h-full">
        <h1 className="text-black font-poppinsRegular text-[48px] leading-[40px]">
          {HeroTitle}
        </h1>
        <h3 className="text-black font-heeboRegular text-[24px] leading-[24px]">
          {HeroSubTitle}
        </h3>
      </div>
    </div>
  );
}
