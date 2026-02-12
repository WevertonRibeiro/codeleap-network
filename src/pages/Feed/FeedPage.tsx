import { useState } from "react";
import {
  usePosts,
  useCreatePost,
  useDeletePost,
} from "@/features/post/hooks/usePosts";
import { useUsername } from "@/contexts/username/useUsername";

import { Container } from "@/components/layout/Container/Container";
import { Card } from "@/components/ui/Card/Card";
import { Form } from "@/components/forms/Form/Form";
import { FormField } from "@/components/forms/FormField/FormField";
import { TextField } from "@/components/forms/Form/TextField/TextField";
import { TextArea } from "@/components/forms/Form/TextArea/TextArea";
import { SubmitButton } from "@/components/forms/Form/SubmitButton/SubmitButton";
import { EmptyState } from "@/components/ui/EmptyState/EmptyState";
import { PostCardHeader } from "@/features/post/components/PostCardHeader/PostCardHeader";
import { ConfirmModal } from "@/components/ui/ConfirmModal/ConfirmModal";

import type { CreatePostDTO } from "@/features/post/types/post.types";

import { timeAgo } from "@/utils/timeAgo";
import styles from "./styles.module.scss";

export function FeedPage() {
  console.log("teste");
  const { data, isLoading } = usePosts();
  const { mutate, isPending } = useCreatePost();

  const { mutate: deleteMutate, isPending: deleteIsLoading } = useDeletePost({
    onSuccess: () => {
      setModalDeleteOpen(false);
      setPostId(null);
    },
  });

  const { username } = useUsername();

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

  const posts = data?.posts ?? [];
  const isEmpty = !isLoading && posts.length === 0;

  const onFinish = (values: CreatePostDTO) => {
    if (!username) return;
    mutate({ ...values, username });
  };

  const onDelete = () => {
    if (!postId) return;
    deleteMutate(postId);
  };

  return (
    <Container className={styles.feedPage}>
      <Card
        title="What’s on your mind?"
        type="secondary"
        className={styles.cardCreateWrapper}
      >
        <Form initialValues={{ title: "", content: "" }} onSubmit={onFinish}>
          <FormField label="Title" name="title">
            <TextField name="title" placeholder="Hello World" required />
          </FormField>

          <FormField label="Content" name="content">
            <TextArea name="content" required />
          </FormField>

          <Form.Footer>
            <SubmitButton title="Create" loading={isPending} />
          </Form.Footer>
        </Form>
      </Card>
      {isLoading ? (
        <span>Carregando...</span>
      ) : isEmpty ? (
        <EmptyState
          title="No posts yet."
          description="Be the first to share something 🚀"
        />
      ) : (
        <div className={styles.postsList}>
          {posts?.map((post) => (
            <Card
              key={post?.id}
              header={
                <PostCardHeader
                  data={post}
                  handleDelete={() => {
                    setModalDeleteOpen(true);
                    setPostId(post?.id);
                  }}
                />
              }
            >
              <div className={styles.postMeta}>
                <div className={styles.author}>
                  <span>{`@${post?.username}`}</span>
                </div>
                <div className={styles.created}>{timeAgo(post?.createdAt)}</div>
              </div>
              <div className={styles.postContent}>{post?.content}</div>
            </Card>
          ))}
        </div>
      )}

      <ConfirmModal
        open={modalDeleteOpen}
        title="Are you sure you want to delete this item?"
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleteIsLoading}
        onConfirm={() => onDelete()}
        onCancel={() => setModalDeleteOpen(false)}
      />
    </Container>
  );
}
