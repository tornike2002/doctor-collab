import { useState } from "react";

import { useGetDoctorBio } from "../../hooks/useGetDoctorBio";
import DoctorInfo from "./DoctorInfo";
import deletes from "/imgs/delete_sign-256.png";
import threedot from "/imgs/7066144.png";
function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: doctorimg, isLoading, isError } = useGetDoctorBio();
  console.log(doctorimg);
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
      {doctorimg.full_name.map((doctor) => (
        <div key={doctor.id}>
          <DoctorInfo
            img={doctor.img}
            fullname={doctor.full_name}
            jobdescription={doctor.job_description}
            handleToggle={handleToggle}
            deletes={deletes}
            threedot={threedot}
            jobcode={doctor.job_code}
          />
        </div>
      ))}
    </div>
  );
}

export default DoctorBio;
