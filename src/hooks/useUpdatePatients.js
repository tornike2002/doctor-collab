import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updatePatients } from "../services/patients";

export const useUpdatePatients = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => updatePatients({id, status}),
    onSuccess: () => {
      queryClient.invalidateQueries(["booking"]);
      toast.success("patients  status updated successfully");
    },
    onError: (error) => {
      toast.error("patients status update failed", error.message);
    },
  });
};
