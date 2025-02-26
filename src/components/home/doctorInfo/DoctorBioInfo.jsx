import React from "react";

export default function DoctorBioInfo({
  imagePreview,
  setIsModalOpen,
  threedot,
  full_name,
  job_description,
  job_code,
}) {
  return (
    <div>
      {" "}
      <div className="flex mt-[100px] justify-end ">
        <div className="relative w-[355px] h-[525px] flex justify-center">
          <img
            src={imagePreview}
            className="top-[-50px] hidden md:block z-10 ml-[50%] rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
            alt="Doctor"
          />
        </div>
        <div className="relative z-1 flex flex-col text-center items-center w-[600px] min-h-[200px] px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
          <img
            onClick={() => setIsModalOpen(true)}
            className="w-[2rem] absolute cursor-pointer top-[20px] right-[20px]"
            src={threedot}
            alt="Edit"
          />
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="lg:text-[60px] text-[30px] font-extrabold">
              {full_name}
            </h1>
            <h1 className="lg:text-[35px] text-[20px] text-[#267CC5]">
              {job_description}
            </h1>
            <h1>{job_code}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
