import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, createPost } from "@/features/post/services/postApi";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
