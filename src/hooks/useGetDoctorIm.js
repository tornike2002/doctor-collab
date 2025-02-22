import { useQuery } from "@tanstack/react-query";
import { apiGetDoctorBioImage } from "../services/homeServices";

export const useGetDoctorIm = () => {
  return useQuery({
    queryFn: apiGetDoctorBioImage,
    queryKey: ["doctor_info"],
  });
};
