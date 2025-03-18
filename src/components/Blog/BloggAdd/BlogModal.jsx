import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../../services/supabase";
import { toast } from "react-toastify";
import useUpdateBlog from "../../../hooks/useUpdateBlog";

export default function BlogModal({ data, handleDelete, closeModal, errors, setErrors }) {
  const { mutate: updateBlog } = useUpdateBlog();
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const slug = formData.get("slug");
    const reading_time = formData.get("reading_time");
    const description = formData.get("description");
    const imageFile = formData.get("img");

    let imageUrl = data.picture;
    const newErrors = {};

    
    if (!title) newErrors.title = "Title is required.";
    if (!slug) newErrors.slug = "Slug is required.";
    if (description.length < 100) {
      newErrors.description = "Description must be at least 100 characters.";
    }
    if (!reading_time) {
      newErrors.reading_time = "Time is required.";
    } else if (parseInt(reading_time, 10) > 60) {
      newErrors.reading_time = "Reading time cannot exceed 60 minutes.";
    }

    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

   
    if (
      title === data.title &&
      slug === data.slug &&
      reading_time === data.reading_time &&
      description === data.description &&
      !imageFile
    ) {
      return toast.error("No changes detected.");
    }

    
    if (imageFile && imageFile.size > 0) {
      const imageName = `${uuidv4()}_${imageFile.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from("doctor_storage")
        .upload(imageName, imageFile);

      if (error) {
        return toast.error("Failed to upload image.");
      }

      imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
    }

    
    try {
      await updateBlog({
        id: data.id,
        title,
        slug,
        description,
        img: imageUrl,
        reading_time,
      });

      toast.success("Blog updated successfully!");
      setErrors({}); 
      closeModal();
    } catch (error) {
      toast.error("Failed to update blog.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <h2 className="text-2xl font-semibold mb-4 break-words">
          Edit Blog: {data.title}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Edit blog title"
              name="title"
              defaultValue={data.title}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              placeholder="Edit blog slug"
              name="slug"
              defaultValue={data.slug}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          {/* Reading Time */}
          <div>
            <label className="block text-gray-700 mb-2">Reading Time (minutes)</label>
            <input
              type="number"
              placeholder="Edit reading time"
              name="reading_time"
              defaultValue={data.reading_time}
              required
              className={`border rounded-lg px-3 py-2 w-full focus:ring-2 focus:outline-none ${
                errors.reading_time ? "border-red-500 border-2" : "border-gray-300"
              }`}
            />
            {errors.reading_time && (
              <p className="text-red-500 text-sm">{errors.reading_time}</p>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              placeholder="Edit blog content"
              name="description"
              defaultValue={data.description}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              name="img"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-gray-200 px-4 py-2 rounded border border-gray-300"
            >
              Upload Image
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
              Save Changes
            </button>

            <button
              type="button"
              className="bg-red-500 px-4 py-2 rounded text-white cursor-pointer text-center"
              onClick={() => handleDelete(data.id)}
            >
              Delete Blog
            </button>
          </div>
        </form>

        {/* Close Modal Button */}
        <button
          className="absolute top-1 right-4 text-gray-500 hover:text-gray-700 hover:scale-110"
          onClick={closeModal}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
