import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiUpdateServices } from "../services/homeServices";

export const useUpServices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, title, image, content }) =>
      apiUpdateServices({ id, title, image, content }),
    onSuccess: () => {
      queryClient.invalidateQueries(["services"]);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
