import React from "react";
import threedot from "/public/imgs/7066144.png";

export default function DoctorInfo({ img, id, jobdescription, fullname }) {
  return (
    <div key={id} className="flex mt-[100px]">
      <div className="relative w-[355px] h-[525px] flex justify-center">
        <img
          src={img}
          className="top-[-50px] z-10 ml-[50%] rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
          alt=""
        />
      </div>

      <div className="relative z-0 flex flex-col items-center  w-[600px] min-h-[200px] px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
        <img
          className="w-[2rem] absolute cursor-pointer top-[20px] right-[20px]"
          src={threedot}
          alt=""
        />

        {/* Centered Text */}
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="lg:text-[60px] text-[50px] font-sans">{fullname}</h1>
          <h1 className="lg:text-[35px] text-[20px] text-[#267CC5]">
            {jobdescription}
          </h1>
        </div>
      </div>
    </div>
  );
}
