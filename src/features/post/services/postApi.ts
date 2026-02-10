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

  //   const response = await fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  console.log(response);
}
