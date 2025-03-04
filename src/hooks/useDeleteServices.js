import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteServices } from "../services/homeServices";

export const useDeleteServices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteServices(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]);
      toast.success("Image Deleted successfully!");
    },
    onError: () => {
      toast.error("Image deletion failed.!");
    },
  });
};
