import { api } from "@/services/api";

import { mapPost } from "../mappers/post.mapper";

import type {
  PostsResponseDTO,
  CreatePostDTO,
  PaginatedPosts,
} from "@/features/post/types/post.types";

export async function getPosts(): Promise<PaginatedPosts> {
  const response = await api.get<PostsResponseDTO>("/");

  const data = response.data;

  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    posts: data.results.map(mapPost),
  };
}

export async function createPost(data: CreatePostDTO) {
  const response = await api.post("/", data);
  return mapPost(response.data);
}

export async function deletePost(id: number) {
  await api.delete(`/${id}/`);
}
