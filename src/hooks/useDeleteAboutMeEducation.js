import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteEducation } from "../services/aboutMeServicies";

export const useDeleteAboutMeEducation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteEducation(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["education"]);
      toast.success("education Deleted successfully!");
    },
    onError: () => {
      toast.error("education deletion failed.!");
    },
  });
};
