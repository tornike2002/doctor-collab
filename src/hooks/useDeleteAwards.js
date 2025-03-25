import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteAwards } from "../services/aboutMeServicies";

export const useDeleteAwards = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteAwards(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["awards"]);
      toast.success("Award Deleted successfully!");
    },
    onError: () => {
      toast.error("Award deletion failed.!");
    },
  });
};
