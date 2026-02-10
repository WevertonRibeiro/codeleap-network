import { Container } from "@/components/layout/Container/Container";
import { Card } from "@/components/ui/Card/Card";
import { Form } from "@/components/forms/Form/Form";
import { FormField } from "@/components/forms/FormField/FormField";
import { TextField } from "@/components/forms/Form/TextField/TextField";
import { TextArea } from "@/components/forms/Form/TextArea/TextArea";
import { Button } from "@/components/ui/Button/Button";

import styles from "./styles.module.scss";

interface FormValues {
  title: string;
  content: string;
}

export function FeedPage() {
  function onFinish(values: FormValues) {
    console.log(values);
  }

  return (
    <Container className={styles.feedPage}>
      <Card>
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
    </Container>
  );
}
