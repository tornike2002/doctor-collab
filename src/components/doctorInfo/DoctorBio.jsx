import { useState } from "react";
import { useGetDoctorIm } from "../../hooks/useGetDoctorIm";
import { useGetDoctorBio } from "../../hooks/useGetDoctorBio";
import Dcotorgrid from "/public/imgs/Dot Grid.png";

function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: doctorimg, isLoading, isError } = useGetDoctorIm();
  // const { data: doctorinfo } = useGetDoctorBio();
  // console.log(doctorinfo);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading doctor information.</div>;
  }

  return (
    <div className="grid grid-cols-1 pb-10 pt-10">
      {doctorimg.img.map((doctor) => (
        <div key={doctor.id} className=" flex  mt-[100px] ">
          {/* Image with half overlay */}
          <div className="relative w-[355px] h-[525px] flex justify-center">
            <img
              src={doctor.img}
              className=" top-[-50px] z-10 ml-[50%]  rounded-lg w-[275px] h-[358px] sm:w-[300px] sm:h-[459px] lg:w-[355px] lg:h-[425px]"
              alt=""
            />
          </div>

          {/* Doctor Bio Section */}
          <div className="relative z-0 flex w-[600px] min-h-[200px] justify-center items-center px-5 md:px-20 bg-[#CCDCF3] mt-[-80px]">
            {/* {doctorinfo.full_name.map((index) => (
              <div>
                <h1>{index.full_name}</h1>
              </div>
            ))} */}
            <h1 className="text-[100px]">{doctor.full_name}</h1>
            <h1 className="text-[20px]">{doctor.job_description}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorBio;
