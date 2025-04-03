import { useQuery } from "@tanstack/react-query";

import { getPatientsTrends } from "../services/Trend";

export const useGetPtTrend = () => {
  return useQuery({
    queryFn: getPatients,
    queryKey: ["patients"],
  });
};
