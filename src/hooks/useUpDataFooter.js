import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { apiUpdateFooter } from "../services/SetingsServicies";

function useUpDataFooter() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, text, phone, email, address, linkedin }) =>
      apiUpdateFooter({ id, text, phone, email, address, linkedin }),
    onSuccess: () => {
      toast.success("footer Bio updated successfully");
      queryClient.invalidateQueries("footer");
    },
    onError: () => {
      toast.error(`footer Bio update failed`);
    },
  });
}
export default useUpDataFooter;
