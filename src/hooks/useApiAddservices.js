import { useQuery } from "@tanstack/react-query";

import { apiGetServices } from "../services/homeServices";

export const useGetServicesId = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => apiGetServices(id),
    enabled: !!id,
  });
};
