import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { addSkills } from "../services/aboutMeServicies";

const useAddSkills = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ skil, description }) => addSkills({ skil, description }),
    onSuccess: () => {
      toast.success("skills added successfully");
      queryClient.invalidateQueries(["skills"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return mutation;
};

export default useAddSkills;
