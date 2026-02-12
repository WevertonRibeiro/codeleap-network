import { useUsername } from "@/contexts/username/useUsername";
import { useNavigate } from "react-router-dom";

import { Modal } from "@/components/ui/Modal/Modal";
import { TextField } from "@/components/forms/Form/TextField/TextField";
import { Form } from "@/components/forms/Form/Form";
import { FormField } from "@/components/forms/FormField/FormField";
import { SubmitButton } from "@/components/forms/Form/SubmitButton/SubmitButton";

import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  onClose: () => void;
};

type submitProps = {
  username: string;
};

export function WelcomeModal({ open, onClose }: Props) {
  const { setUsername } = useUsername();

  const navigate = useNavigate();

  const onFinish = (values: submitProps) => {
    setUsername(values.username);
    navigate("/feed");
  };

  return (
    <Modal
      open={open}
      title="Welcome to CodeLeap network!"
      width={500}
      dismissible={false}
      onClose={onClose}
    >
      <div className={styles.wrapper}>
        <Form onSubmit={onFinish}>
          <FormField label="Please enter your username" name="username">
            <TextField name="username" required />
          </FormField>
          <Modal.Actions>
            <SubmitButton title="ENTER" />
          </Modal.Actions>
        </Form>
      </div>
    </Modal>
  );
}
