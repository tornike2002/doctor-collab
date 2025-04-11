import { useQuery } from "@tanstack/react-query";

import { apiGetEducation } from "../services/aboutMeServicies";

function useGetEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: apiGetEducation,
  });
}

export default useGetEducation;
