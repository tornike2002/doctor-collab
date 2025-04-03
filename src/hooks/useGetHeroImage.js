import { useQuery } from "@tanstack/react-query";

import { apiGetHeroImage } from "../services/homeServices";

export const useGetHeroImage = () => {
  return useQuery({
    queryKey: ["heroImage"],
    queryFn: apiGetHeroImage,
  });
};
