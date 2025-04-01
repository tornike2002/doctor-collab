import { useQuery } from "@tanstack/react-query";

import { getServicesApi } from "../services/Booking";

export const bookingGetServicies = (id) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => getServicesApi(id),
  });
};
