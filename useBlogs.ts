import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { getBlogs, getBlogById, createBlog } from "../api/blogs";

// Get all blogs
export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

// Get blog by id
export const useBlog = (id: number) =>
  useQuery({
    queryKey: ["blogs", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });

// Create blog
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
