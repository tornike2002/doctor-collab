import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiUptHeroImage } from "../services/homeServices";

export const useUptHeroImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ img, id }) => apiUptHeroImage({ img, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["heroImage"]);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
