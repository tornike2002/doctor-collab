import React from "react";
import { useNavigate } from "react-router-dom";
export default function AppointmentsCard({ data, id }) {
  const { image, title, content } = data;
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/servicies/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={navigateHandler}
      className="relative flex flex-col items-center rounded-lg p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-blue-100 w-full max-w-[345px]"
    >
      <div className="relative w-full group">
        <img
          src={image}
          alt="Service"
          className="w-full object-cover object-center h-[14rem] rounded-lg mb-2 cursor-pointer shadow-md"
        />
      </div>
      <p className="text-xl font-medium text-lightBlue cursor-pointer overflow-hidden text-ellipsis max-w-full shadow-sm">
        {title.length > 10 ? `${title.slice(0, 10)}...` : title}
      </p>
      <p className="text-lg text-gray-600 cursor-pointer overflow-hidden text-ellipsis max-w-full">
        {content.length > 10 ? `${content.slice(0, 10)}...` : content}
      </p>
    </div>
  );
}
