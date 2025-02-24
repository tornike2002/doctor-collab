import React, { useState } from "react";
import DoctorUpForm from "./DoctorUpForm";
import useUpDoctorBio from "../../hooks/useUpDoctorBio";
import { toast } from "react-toastify";

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
  const [jobcodes, setJobCode] = useState(jobcode);
  const [jobDesc, setJobDesc] = useState(jobdescription);
  const [image, setImage] = useState(img);
  const { mutate: updateDoctorBios } = useUpDoctorBio();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const full_name = formData.get("full_name");
    const job_description = formData.get("job_description");
    const job_code = formData.get("job_code");

    if (
      !full_name ||
      !job_description ||
      !job_code ||
      full_name.trim().length < 3 ||
      job_description.trim().length < 5 ||
      job_code.trim().length < 5
    ) {
      return toast.error("Please fill all fields with at least 5 characters.");
    } else {
      updateDoctorBios({
        id: id,
        full_name: full_name,
        job_description: job_description,
        job_code: job_code,
        img: img,
      });
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div className="flex mt-[100px]">
        <div className="relative w-[355px] h-[525px] flex justify-center">
          <img
            src={image}
            className="top-[-50px] z-10 ml-[50%] rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
            alt=""
          />
        </div>
        <div className="relative z-1 flex flex-col items-center w-[600px] min-h-[200px] px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
          <img
            onClick={() => setIsModalOpen(true)}
            className="w-[2rem] absolute cursor-pointer top-[20px] right-[20px]"
            src={threedot}
            alt=""
          />
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="lg:text-[60px] text-[30px] font-extrabold">
              {name}
            </h1>
            <h1 className="lg:text-[35px] text-[20px] text-[#267CC5]">
              {jobDesc}
            </h1>
            <h1>{jobcodes}</h1>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <DoctorUpForm
          deletes={deletes}
          setName={setName}
          setJobDesc={setJobDesc}
          setJobCode={setJobCode}
          image={img}
          setImage={setImage}
          setIsModalOpen={setIsModalOpen}
          name={name}
          jobDesc={jobDesc}
          jobcode={jobcodes}
          handleFormSubmit={(e) => handleFormSubmit(e, image)}
        />
      )}
    </div>
  );
}
