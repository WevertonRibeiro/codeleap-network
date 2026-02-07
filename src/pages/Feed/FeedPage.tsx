// import { usePostsQuery } from "@/hooks/";

import { Container } from "@/components/layout/Container/Container";
import { Card } from "@/components/ui/Card/Card";
import { TextField } from "@/components/ui/TextField/TextField";
import { TextArea } from "@/components/ui/TextArea/TextArea";
import { Button } from "@/components/ui/Button/Button";

import styles from "./styles.module.scss";

export function FeedPage() {
  //   const { data, isLoading } = usePostsQuery();

  //   if (isLoading) return <p>Loading...</p>;

  return (
    <Container className={styles.feedPage}>
      <Card>
        <TextField placeholder="Hello World" />
        <TextArea />
        <Button title="Create" handleClick={() => {}} />
      </Card>
    </Container>
    // <div className="">

    //   {data?.results?.map((post: any) => (
    //     <div key={post.id}>
    //       <h3>{post.title}</h3>
    //       <p>{post.content}</p>
    //     </div>
    //   ))}
    // </div>
  );
}
