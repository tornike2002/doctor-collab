import { useQuery } from "@tanstack/react-query";

import { getPatients } from "../services/Patients";

export const useGetPatients = () => {
  return useQuery({
    queryFn: getPatients,
    queryKey: ["patients"],
  });
};
