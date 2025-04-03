import { useQuery } from "@tanstack/react-query";

import { getPatientsTrend } from "../services/Trend";

export const useGetTrend = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: getPatientsTrend,
  });
};
