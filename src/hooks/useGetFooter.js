import { useQuery } from "@tanstack/react-query";

import { apiGetFooter } from "../services/SetingsServicies";

export const useGetFooter = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: apiGetFooter,
  });
};
