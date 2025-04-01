import { useQuery } from "@tanstack/react-query";

import { getPatientsId } from "../services/Patients";

export const useGetPatientsId = (id) => {
  return useQuery({
    queryKey: ["patients", id],
    queryFn: () => getPatientsId(id),
    enabled: !!id,
  });
};
