import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

type TextAreaProps = {
  name: string;
  placeholder?: string;
};

export function TextArea({ name, placeholder }: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      {...register(name)}
      className={styles.TextArea}
      placeholder={placeholder}
    ></textarea>
  );
}
