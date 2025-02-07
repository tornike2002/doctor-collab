import { useMutation, useQueryClient } from "@tanstack/react-query";

import { UpdateBanner } from "../services/homeServices";

const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateDescription } = useMutation({
    mutationFn: ({ id, title }) => UpdateBanner(id, title),
    onSuccess: () => {
      queryClient.invalidateQueries(["banner"]);
    },
    onError(error) {
      console.error("Error updating service:", error);
    },
  });

  return { updateDescription };
};

export default useUpdateBanner;
