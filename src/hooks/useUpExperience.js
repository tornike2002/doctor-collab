import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpExperience } from "../services/aboutMeServicies";

function useUpExperience() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ place, department, dateTo, dateFrom, position, id }) =>
      apiUpExperience({ dateTo, dateFrom, place, department, position, id }),
    onSuccess: () => {
      toast.success("Experience Bio updated successfully");
      queryClient.invalidateQueries("experience");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return mutation;
}
export default useUpExperience;
