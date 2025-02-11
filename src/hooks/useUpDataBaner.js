import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateBanner } from "../services/homeServices";
import { toast } from "react-toastify";

const useUpdateBanner = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ title, id }) => UpdateBanner({ title, id }),
    onSuccess: () => {
      toast.success("banner update successfully");
      queryClient.invalidateQueries(["banner"]);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return mutation;
};

export default useUpdateBanner;
