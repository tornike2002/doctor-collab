import React, { useState } from "react";

// Import the Modal component
import DoctorUpForm from "./DoctorUpForm";

export default function DoctorInfo({
  img,
  id,
  jobdescription,
  deletes,
  fullname,
  threedot,
  jobcode,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(fullname);
  const [jobDesc, setJobDesc] = useState(jobdescription);
  const [image, setImage] = useState(img);

  return (
    <div className="flex mt-[100px]">
      <div className="relative w-[355px]  h-[525px] flex justify-center">
        <img
          src={image}
          className="top-[-50px] z-10 ml-[50%] rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
          alt=""
        />
      </div>

      <div className="relative z-1 flex flex-col items-center  w-[600px] min-h-[200px] px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
        <img
          onClick={() => setIsModalOpen(true)}
          className="w-[2rem] absolute cursor-pointer top-[20px] right-[20px]"
          src={threedot}
          alt=""
        />

        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="lg:text-[60px] text-[50px] font-sans">{name}</h1>
          <h1 className="lg:text-[35px] text-[20px] text-[#267CC5]">
            {jobDesc}
          </h1>
          <h1>{jobcode}</h1>
        </div>
      </div>

      {isModalOpen && (
        <DoctorUpForm
          deletes={deletes}
          setName={setName}
          setJobDesc={setJobDesc}
          image={image}
          setImage={setImage}
          setIsModalOpen={setIsModalOpen}
          name={name}
          jobDesc={jobDesc}
          jobcode={jobcode}
        />
      )}
    </div>
  );
}
