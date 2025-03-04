import { useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useUpServices } from "../../../hooks/useUpServices";
import supabase from "../../../services/supabase";
import Closse from "/public/imgs/delete_sign-256.png";

export default function ServiceModal({ service, closeModal, handleDelete }) {
  const modalFileRef = useRef();
  const { mutate: updateService } = useUpServices();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgFile = modalFileRef.current?.files[0];
    let imageUrl = service.image;

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const content = formData.get("content");

    if (imgFile) {
      const imageName = `${uuidv4()}_${imgFile.name}`;
      const { data: uploadData, error } = await supabase.storage
        .from("doctor_storage")
        .upload(imageName, imgFile);

      if (error) {
        toast.error("Failed to upload image: " + error.message);
        return;
      }

      imageUrl = `https://secchefzcjhlryqhjkvm.supabase.co/storage/v1/object/public/doctor_storage/${uploadData.path}`;
    } // თუ მონაცემები იგივეა, ვაბრუნებთ ერორს
    if (
      title === service.title &&
      content === service.content &&
      imageUrl === service.image
    ) {
      return toast.error("No changes detected.");
    }

    updateService({
      id: service.id,
      title: title,
      content: content,
      image: imageUrl,
    });
    toast.success("Service updated successfully!");
    closeModal();
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl cursor-pointer font-semibold mb-4 break-words">
              Edit Service: {service.title}
            </h2>
            <img
              className="w-[20px] cursor-pointer"
              onClick={closeModal}
              src={Closse}
              alt="Close"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Edit service title"
                name="title"
                defaultValue={service.title}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Content</label>
              <textarea
                placeholder="Edit service content"
                name="content"
                defaultValue={service.content}
                className="border border-gray-300 rounded px-4 py-2 w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Image</label>
              <input
                type="file"
                ref={modalFileRef}
                className="hidden"
                name="image"
              />
              <button
                type="button"
                onClick={() => modalFileRef.current?.click()}
                className="bg-gray-200 px-4 py-2 rounded border border-gray-300"
              >
                Upload Image
              </button>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded text-white"
              >
                Save Changes
              </button>

              <p
                className="bg-red-500 px-4 py-2 rounded text-white cursor-pointer text-center"
                onClick={() => handleDelete(service.id)}
              >
                Delete Service
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
