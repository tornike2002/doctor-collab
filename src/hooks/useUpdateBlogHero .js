import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateBlogHero } from "../services/blogServicies";
function useUpdateBlogHero() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ img, sub_title, title, id }) =>
      apiUpdateBlogHero({ img, sub_title, title, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["about_hero"]);
      toast.success("Blog Hero updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
}

export default useUpdateBlogHero;