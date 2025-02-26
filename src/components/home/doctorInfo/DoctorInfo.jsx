import React, { useRef, useState } from "react";
import DoctorUpForm from "./DoctorUpForm";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../../services/supabase";
import useUpDoctorBio from "../../../hooks/useUpDoctorBio";
import DoctorBioInfo from "./DoctorBioInfo";

export default function DoctorInfo({
  img,
  id,
  job_code,
  job_description,
  full_name,
  threedot,
}) {
  const fileRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(img);

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
    let imageUrl = img;

    const formData = new FormData(e.target);
    const updatedData = {
      id,
      full_name: formData.get("full_name").trim(),
      job_description: formData.get("job_description").trim(),
      job_code: formData.get("job_code").trim(),
    };

    // თუ მონაცემები იგივეა, ვაბრუნებთ ერორს
    if (
      updatedData.full_name === full_name &&
      updatedData.job_description === job_description &&
      updatedData.job_code === job_code &&
      !imgFile
    ) {
      return toast.error("No changes detected.");
    }
    if (updatedData.full_name.length < 3 || updatedData.full_name.length > 13) {
      return toast.error("Name must be between 3 and 13 characters.");
    }

    if (
      updatedData.job_description.length < 5 ||
      updatedData.job_description.length > 20
    ) {
      return toast.error(
        "Job description must be between 5 and 20 characters."
      );
    }

    if (updatedData.job_code.length < 5 || updatedData.job_code.length > 30) {
      return toast.error("Job code must be between 5 and 30 characters.");
    }

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

    updateDoctorBios({ ...updatedData, img: imageUrl });
    setIsModalOpen(false);
    setImagePreview(imageUrl);
    toast.success("Doctor information updated successfully.");
  };
  return (
    <div>
      <DoctorBioInfo
        imagePreview={imagePreview}
        setIsModalOpen={setIsModalOpen}
        threedot={threedot}
        full_name={full_name}
        job_description={job_description}
        job_code={job_code}
      />
      {isModalOpen && (
        <DoctorUpForm
          setIsModalOpen={setIsModalOpen}
          doctorData={{ full_name, job_description, job_code }}
          handleFormSubmit={handleFormSubmit}
          handleImagePreview={handleImagePreview}
          imagePreview={imagePreview}
          fileRef={fileRef}
        />
      )}
    </div>
  );
}
