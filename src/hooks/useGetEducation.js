import { useQuery } from "@tanstack/react-query";

import { apiGetEducation } from "../services/aboutMeServicies";

function useGetExperience() {
  return useQuery({
    queryKey: ["education"],
    queryFn: apiGetEducation,
  });
}

export default useGetExperience;
