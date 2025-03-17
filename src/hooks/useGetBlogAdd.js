import { useQuery } from "@tanstack/react-query";

import { apiGetBlogAdd } from "../services/blogServicies";

export const useGetBlogAdd = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: apiGetBlogAdd,
  });
};