import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addEducation } from "../services/aboutMeServicies";

function useAddAboutMeEducation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ degree, dateFrom, dateTo, uni }) =>
      addEducation(degree, dateFrom, dateTo, uni),
    onSuccess: () => {
      queryClient.invalidateQueries(["education"]);
      toast.success("Education updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export default useAddAboutMeEducation;
