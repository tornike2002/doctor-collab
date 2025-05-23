import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import threedot from "/imgs/7066144.png";
import Modal from "../../Modal/Modal";
import BlogModal from "./BlogModal";
import { Link } from "react-router-dom";

export default function BlogCard({ data, handleDelete, errors, setErrors }) {
  const navigate = useNavigate();

  const [openModalId, setOpenModalId] = useState(null);

  return (
    <div className="relative w-full p-[40px]">
      <div className="shadow-2xl rounded-[15px] cursor-pointer bg-white transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="relative rounded-[15px] p-[30px]">
          <Link to={`/blog/${data.id}`}>
            <img
              src={data.img}
              alt="main_picture"
              className="w-full h-[350px] object-cover rounded-t-[15px] cursor-pointer object-center"
            />
          </Link>

          <img
            src={threedot}
            alt="menu"
            onClick={() => setOpenModalId(data.id)}
            className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
          />
          <div className="text-left bg-white w-full p-4 rounded-b-[15px] border border-gray-200 relative">
            <p className="text-[#808080] text-[20px] font-heeboBold leading-[135%] mb-2">
              Reading Time: {data.reading_time} minutes
            </p>
            <p className="text-[32px] font-poppinsBold leading-tight mb-2">
              {data.title}
            </p>
            <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
              {data.slug}
            </p>
            <p className="font-heeboRegular text-[18px] leading-relaxed mb-4 break-words whitespace-normal">
              {data.description.slice(0, 150)}...
            </p>
          </div>
        </div>
        {openModalId === data.id && (
          <Modal>
            <BlogModal
              closeModal={() => setOpenModalId(null)}
              data={data}
              errors={errors}
              setErrors={setErrors}
              handleDelete={handleDelete}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}
