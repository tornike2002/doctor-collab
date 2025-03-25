import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addAwards } from "../services/aboutMeServicies";

export const useAddAwards = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ name, date, awardedBy }) =>
      addAwards({ name, date, awardedBy }),
    onSuccess: () => {
      toast.success("skills added successfully");
      queryClient.invalidateQueries(["awards"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
};
