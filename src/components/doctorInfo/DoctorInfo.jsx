import React, { useState, useRef } from "react";
import DoctorUpForm from "./DoctorUpForm";
import useUpDoctorBio from "../../hooks/useUpDoctorBio";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../services/supabase";

export default function DoctorInfo({
  img,
  id,
  jobcode,
  jobdescription,
  fullname,
  threedot,
}) {
  const fileRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [doctorData, setDoctorData] = useState({
    id,
    name: fullname,
    jobDesc: jobdescription,
    jobCode: jobcode,
    img: img,
  });

  const { mutate: updateDoctorBios } = useUpDoctorBio();

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const imgFile = fileRef.current?.files[0];
    let imageUrl = doctorData.img;

    const formData = new FormData(e.target);
    const full_name = formData.get("full_name").trim();
    const job_description = formData.get("job_description").trim();
    const job_code = formData.get("job_code").trim();

    if (
      !full_name ||
      !job_description ||
      !job_code ||
      full_name.length < 3 ||
      job_description.length < 5 ||
      job_code.length < 5
    ) {
      return toast.error("Please fill all fields with at least 5 characters.");
    }

    if (imgFile) {
      const imageName = `${uuidv4()}_${imgFile.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from("doctor_storage")
        .upload(imageName, imgFile);

      if (error) {
        console.error("Error uploading image:", error);
        return toast.error("Failed to upload image.");
      }

      imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
    }

    const updatedDoctorData = {
      id,
      full_name,
      job_description,
      job_code,
      img: imageUrl,
    };

    updateDoctorBios(updatedDoctorData);

    setIsModalOpen(false);
    setDoctorData((prev) => ({ ...prev, ...updatedDoctorData }));
    setImagePreview(imageUrl);
    toast.success("Doctor information updated successfully.");
  };

  return (
    <div>
      <div className="flex mt-[100px] justify-end ">
        <div className="relative w-[355px] h-[525px] flex justify-center">
          <img
            src={doctorData.img}
            className="top-[-50px] hidden md:block z-10 ml-[50%] rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
            alt="Doctor"
          />
        </div>
        <div className="   relative z-1 flex flex-col text-center items-center w-[600px] min-h-[200px] px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
          <img
            onClick={() => setIsModalOpen(true)}
            className="w-[2rem] absolute cursor-pointer top-[20px] right-[20px]"
            src={threedot}
            alt="Edit"
          />
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="lg:text-[60px] text-[30px] font-extrabold">
              {doctorData.name}
            </h1>
            <h1 className="lg:text-[35px] text-[20px] text-[#267CC5]">
              {doctorData.jobDesc}
            </h1>
            <h1>{doctorData.jobCode}</h1>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <DoctorUpForm
          setIsModalOpen={setIsModalOpen}
          doctorData={doctorData}
          setDoctorData={setDoctorData}
          handleFormSubmit={handleFormSubmit}
          handleImagePreview={handleImagePreview}
          imagePreview={imagePreview}
          fileRef={fileRef}
          img={img}
        />
      )}
    </div>
  );
}
