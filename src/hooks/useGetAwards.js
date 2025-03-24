import { useQuery } from "@tanstack/react-query";

import { getAwards } from "../services/aboutMeServicies";

export const useGetAwards = () => {
  return useQuery({
    queryKey: ["awards"],
    queryFn: getAwards,
  });
};
