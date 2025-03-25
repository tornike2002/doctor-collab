import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpAboutInfo } from "../services/aboutMeServicies";
import { toast } from "react-toastify";

const useUpAboutInfo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({  text,  img, id}) =>
      apiUpAboutInfo({  text,  img, id}),
    onSuccess: () => {
      toast.success("Doctor Bio updated successfully");
      queryClient.invalidateQueries("about_info");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return mutation;
};

export default useUpAboutInfo;


