import { useQuery } from "@tanstack/react-query";

import { apiGetDoctorBioImage } from "../services/homeServices";

function useGetDoctorIm() {
  return useQuery({
    queryFn: apiGetDoctorBioImage,
    queryKey: ["doctorImage"],
  });
}

export default useGetDoctorIm;
