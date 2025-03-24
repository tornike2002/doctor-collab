import { useQuery } from "@tanstack/react-query";

import { getSkills } from "../services/aboutMeServicies";

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
};
