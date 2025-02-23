import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateDoctorBio } from "../services/homeServices";

function useUpDoctorBio() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ full_name, job_description, job_code, id }) =>
      apiUpdateDoctorBio({ full_name, job_description, job_code, id }),
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
