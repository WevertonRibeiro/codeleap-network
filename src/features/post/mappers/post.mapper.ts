import type { PostDTO, Post } from "../types/post.types";

export function mapPost(dto: PostDTO): Post {
  return {
    id: dto.id,
    username: dto.username,
    title: dto.title,
    content: dto.content,
    createdAt: new Date(dto.created_datetime),
  };
}
