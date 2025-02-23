import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateDoctorBio } from "../services/homeServices";

function useUpDoctorBio() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ full_name, job_description, job_code, img, id }) =>
      apiUpdateDoctorBio({ full_name, job_description, job_code, img, id }),
    onSuccess: () => {
      toast.success("Doctor Bio updated successfully");
      queryClient.invalidateQueries("doctor_info");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return mutation;
}
export default useUpDoctorBio;
