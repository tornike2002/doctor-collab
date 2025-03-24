import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import apiDeleteAboutMeExperience from "../services/aboutMeServicies";

export const useDeleteAboutMeExperience = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => apiDeleteAboutMeExperience(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["experience"]);
      toast.success("Image Deleted successfully!");
    },
    onError: () => {
      toast.error("Image deletion failed.!");
    },
  });
};