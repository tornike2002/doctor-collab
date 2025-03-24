import React from "react";

export default function ExperienceMap({
  deletes,
  handleDelete,
  pen,
  handleEditClick,
  item,
  Frame,
  id,
  circleIcon
}) {
  return (
    <div >
      <div
        key={id}
        className="flex justify-between items-center p-[16px] border rounded-lg"
      >
        <div className="flex items-start w-full  gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-softBlue w-5 h-5 flex justify-center items-center rounded-lg">
              <img src={circleIcon} alt="circle icon" />
            </div>
            <img src={Frame} className="max-h-[50px] mt-2" alt="vector" />
          </div>

          <div className="flex flex-col justify-center text-[9px] md:text-[15px] lg:text-[20px]">
            <h2 className="font-poppinsExtraBold leading-[135%] uppercase">
              {item.place}
            </h2>
            <div className="flex gap-4">
              <h3 className="font-poppinsExtraBold uppercase">
                {item.department}
              </h3>
              <span className="font-heeboRegular opacity-50">
                {`${item.dateFrom ? item.dateFrom.slice(0, 4) : "Unknown"} - ${
                  item.dateTo ? item.dateTo.slice(0, 4) : "Present"
                }`}
              </span>
            </div>
            <h4 className="font-heeboRegular opacity-50">{item.position}</h4>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <img
            className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
            src={pen}
            onClick={() => handleEditClick(item)}
            alt="edit icon"
          />

          <img
            src={deletes}
            onClick={() => handleDelete(item.id)}
            className="text-lightBlue hover:text-brightBlue cursor-pointer w-7 h-7 transition-transform duration-200 hover:scale-125"
            alt="delete icon"
          />
        </div>
      </div>
    </div>
  );
}
