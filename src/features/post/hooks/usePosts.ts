import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPosts,
  createPost,
  deletePost,
} from "@/features/post/services/postApi";

import type { PaginatedPosts } from "../types/post.types";

type Options = {
  onSuccess?: () => void;
};

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
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldData: PaginatedPosts) => {
        if (!oldData) return { posts: [newPost] };
        return {
          ...oldData,
          posts: [newPost, ...oldData.posts],
        };
      });
    },
  });
}

export function useDeletePost(options: Options) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      options?.onSuccess?.();
    },
  });
}
