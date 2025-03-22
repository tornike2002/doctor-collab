import { useQuery } from "@tanstack/react-query";

import { apiAboutInfo } from "../services/aboutMeServicies";

export const useGetAboutInfo = () => {
  return useQuery({
    queryKey: ["about_info"],
    queryFn: apiAboutInfo,
  });
};
