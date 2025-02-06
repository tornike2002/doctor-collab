import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { userLogin } from "../services/auth";

const useLoginMutation = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ email, password }) => userLogin(email, password),
    onSuccess: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};

export default useLoginMutation;
