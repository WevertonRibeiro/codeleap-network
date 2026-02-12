export interface PostDTO {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
  author_ip: string;
}

export interface PostsResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostDTO[];
}

export interface CreatePostDTO {
  username: string;
  title: string;
  content: string;
}

export interface DeletePostDTO {
  id: number;
}

export interface Post {
  id: number;
  username: string;
  createdAt: Date;
  title: string;
  content: string;
  authorIp: string;
}

export interface PaginatedPosts {
  count: number;
  next: string | null;
  previous: string | null;
  posts: Post[];
}
