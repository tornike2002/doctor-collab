import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { AddServices } from "../services/homeServices";

const useAddServices = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ image, title, content }) =>
      AddServices({ image: image, title: title, content: content }),
    onSuccess: () => {
      toast.success("serivices added successfully");
      queryClient.invalidateQueries(["services"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
};

export default useAddServices;
