import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

interface TextFieldProps {
  id?: string;
  name: string;
  placeholder?: string;
}

export function TextField({ id, name, placeholder }: TextFieldProps) {
  const { register } = useFormContext();

  return (
    <input
      id={id ? id : name}
      {...register(name)}
      placeholder={placeholder}
      className={styles.textField}
    />
  );
}
