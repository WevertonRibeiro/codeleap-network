import styles from "./styles.module.scss";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ title, disabled = false, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className={styles.button} disabled={disabled}>
      {title}
    </button>
  );
}
