import { useQuery } from "@tanstack/react-query";
import { apiGetDoctorBio } from "../services/homeServices";

export const useGetDoctorBio = () => {
  return useQuery({
    queryKey: ["doctor_info"],
    queryFn: apiGetDoctorBio,
  });
};
