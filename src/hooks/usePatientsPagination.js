import { useQuery } from "@tanstack/react-query";

import { patientsPagination } from "../services/patients";

export const usePatientsPagination = (pageNumber, itemsPerPage) => {
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  return useQuery({
    queryKey: ["booking", pageNumber],
    keepPreviousData: true,
    queryFn: () => patientsPagination({ start, end }),
  });
};
