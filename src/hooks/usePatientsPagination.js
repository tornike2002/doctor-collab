import { useQuery } from "@tanstack/react-query";

import { patientsPagination } from "../services/Patients";

export const usePatientsPagination = (pageNumber, itemsPerPage) => {
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  return useQuery({
    queryKey: ["patients", pageNumber],
    keepPreviousData: true,
    queryFn: () => patientsPagination({ start, end }),
  });
};
