import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

type TextAreaProps = {
  name: string;
  required: boolean;
  placeholder?: string;
};

export function TextArea({
  name,
  required = false,
  placeholder,
}: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      {...register(name, {
        required: {
          value: required,
          message: `${name} is required`,
        },
      })}
      className={styles.TextArea}
      placeholder={placeholder}
    ></textarea>
  );
}
