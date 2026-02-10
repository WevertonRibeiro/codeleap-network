import styles from "./styles.module.scss";

type ButtonProps = {
  title: string;
  type?: "submit" | "button";
  disabled?: boolean;
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  title,
  type = "button",
  disabled = false,
  handleClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={styles.button}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
