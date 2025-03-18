import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { deleteblogs } from "../services/blogServicies";

export const useDeleteBlogs = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteblogs(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Image Deleted successfully!");
    },
    onError: () => {
      toast.error("Image deletion failed.!");
    },
  });
};
