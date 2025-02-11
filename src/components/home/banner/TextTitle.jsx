import React from "react";

export default function TextTitle({
  title,
  threedots,
  handleThreedotsClick,
  handleChangeClick,
  showBox,
  id,
}) {
  return (
    <div className="bg-softBlue bg-[#CBDEEF] break-words mt-[8rem] flex justify-between items-center lg:py-[4.81rem] py-[1.81rem]  lg:px-[3.81rem] px-[1.81rem]">
      <div className="text-[4rem]">
        <h1 className="font-extrabold text-[#25125d] text-[25px] lg:text-[80%] w-[200px] lg:w-[700px]">
          {title}
        </h1>
      </div>
      <div className="relative">
        <img
          className="w-[35px]  lg:w-[50px]  cursor-pointer"
          src={threedots}
          alt="Options"
          onClick={handleThreedotsClick}
        />
        {showBox && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleChangeClick(id)}
            >
              Change
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
