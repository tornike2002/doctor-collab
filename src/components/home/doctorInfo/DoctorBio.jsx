import { useState } from "react";
import { useGetDoctorBio } from "../../../hooks/useGetDoctorBio";
import DoctorInfo from "./DoctorInfo";
import deletes from "/imgs/delete_sign-256.png";
import threedot from "/imgs/7066144.png";
import DoctorBioSkeleton from "./DoctorBioSkeleton";
function DoctorBio() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: doctorimg, isLoading, isError } = useGetDoctorBio();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return <DoctorBioSkeleton />;
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
            full_name={doctor.full_name}
            job_description={doctor.job_description}
            handleToggle={handleToggle}
            deletes={deletes}
            threedot={threedot}
            job_code={doctor.job_code}
            id={doctor.id}
          />
        </div>
      ))}
    </div>
  );
}

export default DoctorBio;
