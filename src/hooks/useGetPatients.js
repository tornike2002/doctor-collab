import { useQuery } from "@tanstack/react-query";

import { getPatients } from "../services/Booking";

export const useGetPatients = () => {
  return useQuery({
    queryFn: getPatients,
    queryKey: ["booking"],
  });
};
