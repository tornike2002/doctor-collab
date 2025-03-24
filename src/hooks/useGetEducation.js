import { useQuery } from "@tanstack/react-query";

import { apiGetSkills } from "../services/aboutMeServicies";

function useGetEducation() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: apiGetSkills,
  });
}

export default useGetEducation;
