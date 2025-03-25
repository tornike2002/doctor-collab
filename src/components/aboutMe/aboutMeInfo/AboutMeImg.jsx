import Modal from "../../Modal/Modal";
import AboutMeForm from "./AboutMeForm";
import threedot from "/imgs/7066144.png";
import { useState, useRef } from "react";
import useUpAboutInfo from "../../../hooks/useUpAboutInfo";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../../services/supabase";

export default function AboutMeImg({ dataHeroImg, id, text }) {
  const [imagePreview, setImagePreview] = useState(dataHeroImg);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalToggle, setModalToggle] = useState(false);
  const { mutate: updateBlogHero } = useUpAboutInfo();
  const fileRef = useRef();

 
  const handleModalOpen = () => {
    setModalToggle((prev) => !prev);
  };

 
  const handleFormData = async (event) => {
    const imgFile = fileRef.current?.files[0];
    event.preventDefault();
    const formData = new FormData(event.target);
    const newText = formData.get("text");
  
   
    if (newText === text && !imgFile) {
      return toast.error("No changes detected.");
    }
  
    let imageUrl = dataHeroImg;
  
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
  
    updateBlogHero({
      id: id,
      text: newText,
      img: imageUrl,
    });
  
    toast.success("Blog Hero updated successfully.");
    setModalToggle(false);
  };
  

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); 
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative px-[10px] inline-block">
      <img src={imagePreview} className="w-full h-auto" alt="About me" />

      <img
        onClick={handleModalOpen}
        src={threedot}
        alt="Three dots"
        className="absolute cursor-pointer top-2 right-2 w-10 h-10"
        aria-label="Open About Me settings"
      />
      <p className="text-[20px] mt-[30px]">{text}</p>
      {modalToggle && (
        <Modal>
          <AboutMeForm
          text={text}
            handleFormData={handleFormData}
            handleImageChange={handleImageChange}
            imagePreview={imagePreview}
            handleModalOpen={handleModalOpen}
            fileRef={fileRef} 
          />
        </Modal>
      )}
    </div>
  );
}
