import styles from "./styles.module.scss";

type TextFieldProps = {
  placeholder?: string;
};

export function TextField({ placeholder }: TextFieldProps) {
  return <input className={styles.textField} placeholder={placeholder} />;
}
