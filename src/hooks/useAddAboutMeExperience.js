import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiAddAboutMeExperience } from "../services/aboutMeServicies";

function useAddAboutMeExperience() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ dateTo, dateFrom, place, department, position }) =>
      apiAddAboutMeExperience({dateTo, dateFrom, place, department, position}),
    onSuccess: () => {
      queryClient.invalidateQueries(["experience"]);
      toast.success("Experience added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export default useAddAboutMeExperience;