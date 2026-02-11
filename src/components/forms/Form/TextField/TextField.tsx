import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

interface TextFieldProps {
  id?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

export function TextField({
  id,
  name,
  required = false,
  placeholder,
}: TextFieldProps) {
  const { register } = useFormContext();

  return (
    <input
      id={id ? id : name}
      {...register(name, {
        required: {
          value: required,
          message: `${name} is required`,
        },
      })}
      placeholder={placeholder}
      className={styles.textField}
    />
  );
}
