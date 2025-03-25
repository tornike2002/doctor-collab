import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpEducation } from "../services/aboutMeServicies";

function useUpdateAboutMeEducation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, degree, from, to, uni }) =>
      apiUpEducation({
        id,
        degree,
        from,
        to,
        uni,
      }),
    onSuccess: () => {
      toast.success("Education Bio updated successfully");
      queryClient.invalidateQueries("education");
    },
    onError: () => {
      toast.error(`Education Bio update failed`);
    },
  });
}
export default useUpdateAboutMeEducation;
