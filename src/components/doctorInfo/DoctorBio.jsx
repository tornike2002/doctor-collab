import { useState } from "react";

// import DoctorBioContent from "./DoctorBioContent";
// import DoctorBioSkeleton from "./DoctorBioSkeleton";
import useGetDoctorBio from "../../hooks/useGetDoctorBio";
import useGetDoctorIm from "../../hooks/useGetDoctorIm";

function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useGetDoctorBio();
  const {
    data: doctorImage,
    isLoading: ImageLoading,
    isError: ImageError,
  } = useGetDoctorIm();

  // this function opens and closes toggle menu

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  if (isLoading || ImageLoading) return <DoctorBioSkeleton />;
  if (isError || ImageError) return <div>Error...</div>;

  return (
    <div className="grid grid-cols-1 pb-10 pt-10">
      {doctorImage?.map((asset) => (
        <div
          key={asset.id}
          className="bg-pastelBlue w-[275px] max-w-full min-h-[289px] justify-self-end relative  sm:w-[498px] sm:min-h-[521px]
         md:w-[573px] md:min-h-[631px] lg:w-[725px] lg:min-h-[750px]"
        >
          <div>
            <img
              src="/images/dots.png"
              alt="dots"
              onClick={handleToggle}
              className="w-[25px] h-[25px] cursor-pointer absolute right-2 top-2"
            />
          </div>
          <div>
            <img
              src={asset.middle_pic}
              alt="doc"
              className="absolute bg-no-repeat object-center object-cover -left-36 top-8 w-[172px] max-w-full h-[243px] rounded-lg hidden mediumSm:block
             mediumSm:h-[220px] sm:w-[275px] sm:h-[358px] sm:top-20 md:w-[300px] md:h-[459px] md:-left-48 lg:w-[355px] lg:min-h-[525px]"
            />
          </div>
          <div className="flex justify-center items-center h-full pl-5 md:pl-20 pr-10">
            {data.map((info) => (
              <div key={info.id}>
                {/* <DoctorBioContent
                  assetId={asset.id}
                  infoId={info.id}
                  isOpen={isOpen}
                  fullname={info.fullname}
                  status={info.status}
                  degree={info.degree}
                /> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorBio;
