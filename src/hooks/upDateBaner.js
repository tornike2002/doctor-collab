import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateBanner } from "../services/homeServices";

const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateTitle } = useMutation({
    mutationFn: ({ id, title }) => UpdateBanner({ id, title }),
    onSuccess: () => {
      queryClient.invalidateQueries(["banner"]);
    },
    onError: (error) => {
      console.error("Error updating banner:", error);
    },
  });

  return { updateTitle };
};

export default useUpdateBanner;
