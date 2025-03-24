import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiUpSkills } from "../services/aboutMeServicies";

export const useUpSkills = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ skil, description, id }) =>
      apiUpSkills({ skil, description, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["skills"]);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};
