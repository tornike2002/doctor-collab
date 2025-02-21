import { useQuery } from "@tanstack/react-query";

import { apiGetDoctorBio } from "../services/homeServices";

function useGetDoctorBio() {
  return useQuery({
    queryFn: apiGetDoctorBio,
    queryKey: ["doctorBio"],
  });
}

export default useGetDoctorBio;
