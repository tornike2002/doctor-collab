import { useQuery } from "@tanstack/react-query";

import { getBlogId } from "../services/blogServicies";

export const useGetBlogId = (id) => {
  return useQuery({
    queryKey: ["doctor_blog",id],
    queryFn: () => getBlogId(id),
    enabled: !!id,
  });
};