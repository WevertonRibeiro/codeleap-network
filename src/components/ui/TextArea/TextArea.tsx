import styles from "./styles.module.scss";

type TextAreaProps = {
  placeholder?: string;
};

export function TextArea({ placeholder }: TextAreaProps) {
  return (
    <textarea className={styles.TextArea} placeholder={placeholder}></textarea>
  );
}
