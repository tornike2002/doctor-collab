import { useQuery } from "@tanstack/react-query";

import { apiGetBanner } from "../services/homeServices";

export const useGetbanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: apiGetBanner,
  });
};
