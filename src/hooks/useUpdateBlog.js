import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { UpdateBlog } from "../services/blogServicies";

function useUpdateBlog() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({  title, slug, description, img, reading_time,id}) =>
        UpdateBlog({  title, slug, description, img, reading_time,id}),
    onSuccess: () => {
      toast.success("Doctor Bio updated successfully");
      queryClient.invalidateQueries("blogs");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return mutation;
}
export default useUpdateBlog;
