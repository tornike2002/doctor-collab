import React, { useState, useRef } from "react";
import { useGetServices } from "../../../hooks/useGetSerivices";
import CardGrid from "./CardGrid";
import ShowInputForm from "./ShowInputForm";
import { v4 as uuidv4 } from "uuid";
import useAddServices from "../../../hooks/useAddServices";
import supabase from "../../../services/supabase";
import { useDeleteServices } from "../../../hooks/useDeleteServices";
import { toast } from "react-toastify";
import ServiceSkeleton from "./ServiceSkeleton";
export default function ServiceCard() {
  const { data, isLoading, isError, error } = useGetServices();
  const { mutate } = useAddServices();
  const [openModalId, setOpenModalId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [addContent, setAddContent] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const { mutate: deleteServices } = useDeleteServices();
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef();

  const handleEditClick = () => {
    setShowInput(!showInput);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
    }
  };

  const handleDelete = (id) => {
    deleteServices(id);
  };

  const submitServiceAdd = async (e) => {
    e.preventDefault();

    const imgFile = fileRef.current?.files[0];
    let imageUrl = data.image;
    const trimmedTitle = inputValue.trim();
    const trimmedContent = addContent.trim();

    // Validate if all fields are empty
    if (
      trimmedTitle === trimmedTitle &&
      trimmedContent === trimmedContent &&
      !imgFile
    ) {
      return toast.error("No information added.");
    }

    setIsUploading(true);

    try {
      if (imgFile) {
        const imageName = `${uuidv4()}_${imgFile.name}`;
        const { data: uploadData, error } = await supabase.storage
          .from("doctor_storage")
          .upload(imageName, imgFile);

        if (error) {
          setIsUploading(false);
          return toast.error("Failed to upload image.");
        }

        imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
      }

      // Submit data
      mutate({
        title: trimmedTitle,
        image: imageUrl,
        content: trimmedContent,
      });

      // Reset form
      setInputValue("");
      setAddContent("");
      setPreviewUrl("");
      setShowInput(false);
      if (fileRef.current) fileRef.current.value = "";
    } catch (error) {
      toast.error("An error occurred while submitting.");
    } finally {
      setIsUploading(false);
    }
  };

  if (isLoading) return <ServiceSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-[10px]">
      <div className="flex flex-col gap-[20px] items-center w-full">
        <h1 className="text-[45px] font-extrabold">Services For My Patients</h1>
        <div
          className="w-full cursor-pointer flex text-[30px] font-extrabold justify-end pr-[30px]"
          onClick={handleEditClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleEditClick()}
        >
          <h1>Edit</h1>
        </div>
      </div>
      <ShowInputForm
        fileRef={fileRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addContent={addContent}
        setAddContent={setAddContent}
        submitServiceAdd={submitServiceAdd}
        handleEditClick={handleEditClick}
        showInput={showInput}
        handleImagePreview={handleImagePreview}
        previewUrl={previewUrl}
        isUploading={isUploading}
      />

      <div className="grid grid-cols-1 gap-20 gap-y-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <CardGrid
            key={service.id}
            service={service}
            isLoading={isLoading}
            openModalId={openModalId}
            setOpenModalId={setOpenModalId}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
