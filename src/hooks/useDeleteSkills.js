import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteSkills } from "../services/aboutMeServicies";

export const useDeleteSkills = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteSkills(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
      toast.success("skills Deleted successfully!");
    },
    onError: () => {
      toast.error("skills deletion failed.!");
    },
  });
};
