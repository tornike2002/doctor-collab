import { useQuery } from "@tanstack/react-query";

import { getPatientsId } from "../services/patients";

export const useGetPatientsId = (id) => {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: () => getPatientsId(id),
    enabled: !!id,
  });
};
