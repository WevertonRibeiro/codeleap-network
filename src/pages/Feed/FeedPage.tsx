import { usePosts, useCreatePost } from "@/features/post/hooks/usePosts";

import { Container } from "@/components/layout/Container/Container";
import { Card } from "@/components/ui/Card/Card";
import { Form } from "@/components/forms/Form/Form";
import { FormField } from "@/components/forms/FormField/FormField";
import { TextField } from "@/components/forms/Form/TextField/TextField";
import { TextArea } from "@/components/forms/Form/TextArea/TextArea";
import { Button } from "@/components/ui/Button/Button";

import { timeAgo } from "@/utils/timeAgo";

import type { CreatePostDTO } from "@/features/post/types/post.types";

import styles from "./styles.module.scss";

export function FeedPage() {
  const { data, isLoading } = usePosts();
  const { mutate, isPending } = useCreatePost();

  if (isLoading) return <span>Loading...</span>;

  const onFinish = (values: CreatePostDTO) => {
    const data = {
      username: "Tom",
      title: values?.title,
      content: values?.content,
    };
    mutate(data);
  };

  return (
    <Container className={styles.feedPage}>
      <Card
        title="What’s on your mind?"
        type="secondary"
        className={styles.cardCreateWrapper}
      >
        <Form
          initialValues={{ title: "teste", content: "" }}
          onSubmit={onFinish}
        >
          <FormField label="Title" name="title">
            <TextField name="title" placeholder="Hello World" />
          </FormField>

          <FormField label="Content" name="content">
            <TextArea name="content" />
          </FormField>

          <Button type="submit" title="Create" handleClick={() => {}} />
        </Form>
      </Card>
      <div className={styles.postsList}>
        {data?.posts?.map((post) => (
          <Card key={post.id} title={post.title}>
            <div className={styles.postMeta}>
              <div className={styles.author}>
                <span>{`@${post.username}`}</span>
              </div>
              <div className={styles.created}>{timeAgo(post.createdAt)}</div>
            </div>
            <div className={styles.postContent}>{post.content}</div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
