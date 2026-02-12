import { useUsername } from "@/contexts/username/useUsername";

import { Icon } from "@/components/ui/icons";

import type { Post } from "../../types/post.types";

type PostCardHeadeProps = {
  data: Post;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

import styles from "./styles.module.scss";

export function PostCardHeader({
  data,
  handleEdit,
  handleDelete,
}: PostCardHeadeProps) {
  const { username } = useUsername();

  return (
    <div className={styles.header}>
      <h2>{data?.title}</h2>
      {data?.username === username && (
        <div className={styles.actions}>
          <span onClick={() => handleEdit?.()}>
            <Icon name="edit" />
          </span>
          <span onClick={() => handleDelete?.()}>
            <Icon name="delete" />
          </span>
        </div>
      )}
    </div>
  );
}
