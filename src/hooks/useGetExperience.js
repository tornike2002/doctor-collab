import { useQuery } from "@tanstack/react-query";

import { apiExperinece } from "../services/aboutMeServicies";

function useGetExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: apiExperinece,
  });
}

export default useGetExperience;