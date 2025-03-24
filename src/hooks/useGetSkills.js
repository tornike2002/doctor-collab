import { useQuery } from "@tanstack/react-query";

import { getServicesId } from "../services/homeServices";

export const useGetSkills = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => getServicesId(id),
    enabled: !!id,
  });
};