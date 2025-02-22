import { useState } from "react";

import { useGetDoctorBio } from "../../hooks/useGetDoctorBio";
import DoctorInfo from "./DoctorInfo";

function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: doctorimg, isLoading, isError } = useGetDoctorBio();

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
        <DoctorInfo
          img={doctor.img}
          fullname={doctor.full_name}
          jobdescription={doctor.job_description}
          id={doctor.id}
        />
      ))}
    </div>
  );
}

export default DoctorBio;
