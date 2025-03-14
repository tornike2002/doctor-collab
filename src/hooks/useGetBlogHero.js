import { useQuery } from "@tanstack/react-query";

import { apiGetBlogHero } from "../services/blogServicies";

function useGetBlogHero() {
  return useQuery({
    queryKey: ["about_hero"],
    queryFn: apiGetBlogHero,
  });
}

export default useGetBlogHero;