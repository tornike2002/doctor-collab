import { useQuery } from "@tanstack/react-query";

import { apiGetServices } from "../services/homeServices";

export const useGetServices = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => apiGetServices(id),
  });
};
